// En SceneOne.js
import React, { useState } from 'react';
import { Sky, Text, Entity, Box } from 'react-aframe-ar';

export default function SceneOne({ visible, changeScene }) {
	const [visibleText, setVisibleText] = useState(false);
	const [interactable, setInteractable] = useState(true);

	const handleClick = () => {
		setVisibleText(!visibleText);
	};

	const handleSceneChange = newScene => {
		setInteractable(false); // Desactiva la interacción antes de cambiar de escena
		changeScene(newScene);
	};

	return (
		<Entity id='SceneOne' visible={visible} raycaster={interactable ? '' : 'objects: .clickable'}>
			<Sky src='/img/entrance.jpg' rotation='0 -130 0' />

			<Box
				position='-5 1.5 -4'
				scale='0.25 0.25 0.25'
				color='red'
				animation__postition="property: rotation; to: 0 360 0; dir: alternate; dur: 2000; loop: true;"
			></Box>

			<Entity
				position='-5 1.39 4'
				rotation='5.42 139.07 -0.08'
				scale='0.93 0.87 0.26'
				className='clickable'
				events={{ click: handleClick }}
			>
				<Text value='¡Click Aca!' align='center' position='0 0 0.01' color='#FFFFFF' />
			</Entity>

			<Entity
				visible={visibleText}
				geometry='primitive: plane; width: 5; height: 3;'
				material='color: #000000;'
				position='-5 3 4'
				rotation='5.42 139.07 -0.08'
				scale='0.93 0.87 0.26'
			>
				<Text
					value='Bienvenidos al Tour Virtual de el Circulo de Suboficiales de Colombia'
					align='center'
					position='0 0 0.01'
					color='#FFFFFF'
				/>
			</Entity>

			<Entity
				geometry='primitive: plane; width: 3; height: 0.4;'
				material='color: #000000;'
				position='-5 2 -4'
				rotation='0 50 5'
				className='clickable'
				scale='1.13 1 0.04'
				events={{ click: () => handleSceneChange('SceneTwo') }} // Cambiar la escena con handleSceneChange
			>
				<Text value='Salida 9' align='center' position='0 0 0.01' color='#FFFFFF' />
			</Entity>
		</Entity>
	);
}

// bbtpwzmy
// AdminCodaltec@24