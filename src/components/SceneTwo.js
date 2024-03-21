// SceneTwo.js
import React from 'react';
import {Sky, Text, Entity} from 'react-aframe-ar';

export default function SceneTwo({visible, changeScene}) {
	return (
		<Entity id='SceneTwo' visible={visible}>
			<Sky src='/img/checkIn.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 1; height: 0.5;'
				material='color: #FFFFFF;'
				position='-9.26 2.29074 0.60646'
				rotation='-8.69979116126642 81.8023303264179 3.040114060964149'
				className='clickable'
				events={{click: () => changeScene('SceneOne')}}
			>
				<Text value='Entrada' align='center' position='0 0 0.01' color='#7BC8A4' />
			</Entity>

			<Entity
				geometry='primitive: plane; width: 1; height: 0.5;'
				material='color: #FFFFFF;'
				position='4.35635 2.63472 1.1059'
				rotation='5.148598747045577 -91.25269619930569 -2.9117715148548435'
				className='clickable'
				events={{click: () => changeScene('SceneThree')}}
			>
				<Text value='Calle' align='center' position='0 0 0.01' color='#7BC8A4' />
			</Entity>
		</Entity>
	);
}
