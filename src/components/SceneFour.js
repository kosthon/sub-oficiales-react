import React from 'react';
import { Sky, Text, Entity, Box } from 'react-aframe-ar';

export default function SceneFour({ visible, changeScene }) {

	return (
		<Entity id='SceneFour' visible={visible}>
			<Sky src='/img/oratorio.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 3; height: 0.5;'
				material='color: #000000;'
				position='5 3 -5'
				rotation='30 -35 1.8'
				className={visible ? 'clickable' : ''}
				events={{ click: () => changeScene('SceneThree') }}
			>
				<Text value='Check In' align='center' position='0 0 0.01' color='#FFFFFF' />
			</Entity>
			<Box
				position='5 2.3 -5'
				scale='0.25 0.25 0.25'
				color='red'
				animation__postition="property: rotation; to: 0 360 0; dir: alternate; dur: 2000; loop: true;">
			</Box>
		</Entity>
	);
}
