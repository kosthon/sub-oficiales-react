import React, {useState} from 'react';
import 'aframe';
import {Animation, Cursor} from 'react-aframe-ar';
import SceneOne from './components/SceneOne';
import SceneTwo from './components/SceneTwo';
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
			<Animation
				attribute='scale'
				dur='1000'
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
