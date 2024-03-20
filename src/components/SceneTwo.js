// SceneTwo.js
import React from 'react';
import {Sky, Text, Entity} from 'react-aframe-ar';
import Button from './Button';

export default function SceneTwo({visible, changeScene}) {
	return (
		<Entity id='SceneTwo' visible={visible}>
			<Sky src='/img/checkIn.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 1; height: 0.5;'
				material='color: #FFFFFF;'
				position='-3.86 1.53 -2.53'
				rotation='-8.7 41.23 3.04'
				className='clickable'
				events={{click: () => changeScene('SceneOne')}}
			>
				<Text value='Entrada' align='center' position='0 0 0.01' color='#7BC8A4' />
			</Entity>

			{/* <Button
				text='Ir a Scene 1'
				x='-1.5'
				y='1'
				z='-4'
				className='scene1-button'
				onClick={() => changeScene('SceneOne')}
			/> */}
		</Entity>
	);
}
