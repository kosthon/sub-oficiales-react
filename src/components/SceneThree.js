import React from 'react';
import {Sky, Text, Entity} from 'react-aframe-ar';

export default function SceneThree({visible, changeScene}) {
	return (
		<Entity id='SceneThree' visible={visible}>
			<Sky src='/img/salida9.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 1; height: 0.5;'
				material='color: #FFFFFF;'
				position='-4.73 2.07074 7.98732'
				rotation='-8.46979 138.94648 0.54011'
				className='clickable'
				events={{click: () => changeScene('SceneTwo')}}
			>
				<Text value='Oratorio' align='center' position='0 0 0.01' color='#7BC8A4' />
			</Entity>

			<Entity
				geometry='primitive: plane; width: 1; height: 0.5;'
				material='color: #FFFFFF;'
				position='-5.57691 0.54748 -4.84135'
				rotation='5.527896807422183 38.19107479224016 2.0139466498848435'
				className='clickable'
				events={{click: () => changeScene('SceneFour')}}
			>
				<Text value='Salida 9' align='center' position='0 0 0.01' color='#7BC8A4' />
			</Entity>
		</Entity>
	);
}
