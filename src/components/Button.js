// Button.js
import React from 'react';
import {Entity, Text} from 'react-aframe-ar';

export default function Button({className, x, y, z, text, onClick}) {
	return (
		<Entity
			class={`button ${className}`}
			position={`${x} ${y} ${z}`}
			className='clickable'
			events={{click: onClick}}
		>
			<Text value={text} align='center' position='0 0 0.01' color='#7BC8A4' />
		</Entity>
	);
}
