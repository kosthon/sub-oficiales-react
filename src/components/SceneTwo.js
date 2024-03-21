// SceneTwo.js
import React from 'react';
import {Sky, Text, Entity, Box} from 'react-aframe-ar';

export default function SceneTwo({visible, changeScene}) {
	return (
		<Entity id='SceneTwo' visible={visible}>
			<Sky src='/img/salida9.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 3; height: 0.4;'
				material='color: #000000;'
				position='-6 2.3 0.6'
				rotation='-8.69979116126642 81.8023303264179 3.040114060964149'
				className='clickable'
				events={{click: () => changeScene('SceneThree')}}
			>
				<Text value='Entrada' align='center' position='0 0 0.01' color='#FFFFFF' />
			</Entity>
			<Box
				position='-6 1.5 0.6'
				scale='0.25 0.25 0.25'
				color='red'
				animation__postition="property: rotation; to: 0 360 0; dir: alternate; dur: 2000; loop: true;">
			</Box>

			<Entity
				geometry='primitive: plane;  width: 3; height: 0.4;'
				material='color: #000000;'
				position='4.5 2.5 2'
				rotation='5.148598747045577 -91.25269619930569 -2.9117715148548435'
				className='clickable'
				events={{click: () => changeScene('SceneOne')}}
			>
				<Text value='Calle' align='center' position='0 0 0.01' color='#FFFFFF' />
			</Entity>
			<Box
				position='4.5 1.5 2'
				scale='0.25 0.25 0.25'
				color='red'
				animation__postition="property: rotation; to: 0 360 0; dir: alternate; dur: 2000; loop: true;">
			</Box>
		</Entity>
	);
}
