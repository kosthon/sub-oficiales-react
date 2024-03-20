// SceneOne.js
import React from 'react';
import {Sky, Text, Entity} from 'react-aframe-ar';
import Button from './Button';

export default function SceneOne({visible, changeScene}) {
	return (
		<Entity id='SceneOne' visible={visible}>
			<Sky src='/img/entrance.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 1; height: 0.5;'
				material='color: #FFFFFF;'
				position='-5 1.5 -3.7'
				rotation='0 40.34 0'
				className='clickable'
				scale='1.13 1 0.04'
				events={{click: () => changeScene('SceneTwo')}}
			>
				<Text value='Check In' align='center' position='0 0 0.01' color='#000000' />
			</Entity>

			{/* <Button
				text='Ir a Scene 2'
				x='-1.5'
				y='1'
				z='-4'
				className='scene2-button'
				onClick={() => changeScene('SceneTwo')}
			/> */}
		</Entity>
	);
}
