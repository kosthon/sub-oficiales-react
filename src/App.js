import React, {useState} from 'react';
import {Sky, Text, Scene, Entity, Cursor, Camera} from 'react-aframe-ar';

function App() {
	const [currentScene, setCurrentScene] = useState('main');

	const handleButtonClick = () => {
		setCurrentScene('new');
	};

	return (
		<Scene>
			{currentScene === 'main' && (
				<Sky
					src='https://weloobe.github.io/vr360expo/static_assets/chess-world.jpg'
					rotation='0 -130 0'
				/>
			)}
			{currentScene === 'new' && <Sky src='URL_DEL_NUEVO_SKY' rotation='0 -130 0' />}

			<Entity
				geometry='primitive: plane; width: 1; height: 0.5;'
				material='color: #4CC3D9;'
				position='0 1 -3'
				className='clickable'
				events={{click: handleButtonClick}}
			>
				<Text value='Segunda escena' align='center' position='0 0 0.01' color='#7BC8A4' />
			</Entity>

			<Camera>
				<Cursor
					cursor='fuse: true;'
					raycaster={{objects: '.clickable'}}
					geometry='primitive: ring'
				/>
			</Camera>

			<Text value='CODALTEC' align='center' position='0 1 -1.5' color='#7BC8A4' />
		</Scene>
	);
}

export default App;
