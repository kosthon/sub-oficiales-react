import React, {useState} from 'react';
import 'aframe';
import {Animation, Cursor} from 'react-aframe-ar';
import SceneOne from './components/SceneOne';
import SceneTwo from './components/SceneTwo';
import SceneThree from './components/SceneThree';
import SceneFour from './components/SceneFour';
import Common from './components/Common';

function App() {
	const [currentScene, setCurrentScene] = useState('SceneOne');

	const changeScene = newScene => {
		setCurrentScene(newScene);
	};

	return (
		<>
			<Common />
			<SceneOne
				visible={currentScene === 'SceneOne'}
				changeScene={changeScene}
				cursor={<Cursor />}
			/>
			<SceneTwo
				visible={currentScene === 'SceneTwo'}
				changeScene={changeScene}
				cursor={<Cursor />}
			/>
			<SceneThree
				visible={currentScene === 'SceneThree'}
				changeScene={changeScene}
				cursor={<Cursor />}
			/>
			<SceneFour
				visible={currentScene === 'SceneFour'}
				changeScene={changeScene}
				cursor={<Cursor />}
			/>
			<Animation
				attribute='scale'
				dur='350'
				easing='ease-in-out'
				fill='forwards'
				from='0 0 0'
				to='1 1 1'
				play
			></Animation>
		</>
	);
}

export default App;
