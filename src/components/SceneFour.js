import React from 'react';
import {Sky, Text, Entity} from 'react-aframe-ar';

export default function SceneFour({visible, changeScene}) {
	return (
		<Entity id='SceneFour' visible={visible}>
			<Sky src='/img/oratorio.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 1; height: 0.5;'
				material='color: #FFFFFF;'
				position='4.47716 0.54748 -4.84135'
				rotation='-6.8721 -35.66893 1.76395'
				className='clickable'
				events={{click: () => changeScene('SceneThree')}}
			>
				<Text value='CheckIn' align='center' position='0 0 0.01' color='#7BC8A4' />
			</Entity>
		</Entity>
	);
}
