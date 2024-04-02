// En SceneOne.js
import React, { useState } from 'react';
import { Sky, Entity, Box, Image } from 'react-aframe-ar';

export default function SceneOne({ visible, changeScene }) {
	// const [visibleText, setVisibleText] = useState(false);
	const [interactable, setInteractable] = useState(true);

	// const handleClick = () => {
	// 	setVisibleText(!visibleText);
	// };

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
				geometry='primitive: plane; width: 1; height: 1;'
				position='-5 2.8 -4'
				rotation='0 50 5'
				className={visible ? 'clickable' : ''}
				scale='1.13 1 0.04'
				events={{ click: () => handleSceneChange('SceneTwo') }}
			>
				<Image src="/img/Salida.png" width="1" height="1" position="0 0 0" />
			</Entity>
		</Entity>
	);
}

// bbtpwzmy
// AdminCodaltec@24