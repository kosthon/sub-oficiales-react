import React from 'react';
import {Sky, Text, Entity, Box} from 'react-aframe-ar';

export default function SceneThree({visible, changeScene}) {
	return (
		<Entity id='SceneThree' visible={visible}>
			<Sky src='/img/checkIn.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 3; height: 0.5;'
				material='color: #000000;'
				position='-5 2.8 5'
				rotation='-8.46979 138.94648 0.54011'
				className='clickable'
				events={{click: () => changeScene('SceneFour')}}
			>
				<Text value='Oratorio' align='center' position='0 0 0.01' color='#FFFFFF' />
			</Entity>
			<Box
				position='-5 1.8 5'
				scale='0.25 0.25 0.25'
				color='red'
				animation__postition="property: rotation; to: 0 360 0; dir: alternate; dur: 2000; loop: true;">
			</Box>
			
			<Entity
				geometry='primitive: plane; width: 3; height: 0.5;'
				material='color: #000000;'
				position='-5.5 0.5 -4.8'
				rotation='5.527896807422183 38.19107479224016 2.0139466498848435'
				className='clickable'
				events={{click: () => changeScene('SceneTwo')}}
			>
				<Text value='Salida 9' align='center' position='0 0 0.01' color='#FFFFFF' />
			</Entity>
			<Box
				position='-5.5 -0.5 -4.8'
				scale='0.25 0.25 0.25'
				color='red'
				animation__postition="property: rotation; to: 0 360 0; dir: alternate; dur: 2000; loop: true;">
			</Box>
		</Entity>
	);
}
