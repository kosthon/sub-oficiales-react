import 'aframe';
import React from 'react';
import {Sky, Text, Scene, Entity, Cursor, Camera} from 'react-aframe-ar';

function App() {
	return (
		<Scene>
			<Sky src='/img/entrance.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 1; height: 0.5;'
				material='color: #4CC3D9;'
				position='0 1 -3'
				className='clickable'
				events={{click: () => console.log('Botón clickeado!')}}
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
