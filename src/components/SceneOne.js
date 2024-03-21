// SceneOne.js
import React from 'react';
import {Sky, Text, Entity, Box} from 'react-aframe-ar';

export default function SceneOne({visible, changeScene}) {
	return (
		<Entity id='SceneOne' visible={visible}>
			<Sky src='/img/entrance.jpg' rotation='0 -130 0' />

			<Box
				position='-5 1.5 -4'
				scale='0.25 0.25 0.25'
				color='red'
				animation__postition="property: rotation; to: 0 360 0; dir: alternate; dur: 2000; loop: true;">
			</Box>

			<Entity
				geometry='primitive: plane; width: 3; height: 0.4;'
				material='color: #000000;'
				position='-5 2 -4'
				rotation='0 50 5'
				className='clickable'
				scale='1.13 1 0.04'
				events={{click: () => changeScene('SceneTwo')}}
			>
				<Text value='Salida 9' align='center' position='0 0 0.01' color='#FFFFFF' />
			</Entity>
		</Entity>
	);
}
