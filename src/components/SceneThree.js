import React from 'react';
import { Sky, Image, Entity, Box } from 'react-aframe-ar';

export default function SceneThree({ visible, changeScene }) {
	return (
		<Entity id='SceneThree' visible={visible}>
			<Sky src='/img/checkIn.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 1; height: 1;'
				material='color: #000000;'
				position="-3.89593 2.2 3.16747"
				rotation="-1.93 125 0"
				scale="1 1 0"
				className={visible ? 'clickable' : ''}
				events={{ click: () => changeScene('SceneFour') }}
			>
				<Image src="/img/Oratorio.png" width="1" height="1" position="0 0 0" />
			</Entity>

			<Box
				position="-3.89593 1 3.16747"
				scale='0.25 0.25 0.25'
				color='red'
				animation__postition="property: rotation; to: 0 360 0; dir: alternate; dur: 2000; loop: true;">
			</Box>

			<Entity
				geometry='primitive: plane; width: 1; height: 1;'
				material='color: #000000;'
				position='-5.5 2.9 -8'
				rotation='5.527896807422183 38.19107479224016 2.0139466498848435'
				className={visible ? 'clickable' : ''}
				events={{ click: () => changeScene('SceneTwo') }}
			>
				<Image src="/img/Salida.png" width="1" height="1" position="0 0 0" />
			</Entity>
			<Box
				position='-5.5 1.8 -8'
				scale='0.25 0.25 0.25'
				color='red'
				animation__postition="property: rotation; to: 0 360 0; dir: alternate; dur: 2000; loop: true;">
			</Box>
		</Entity>
	);
}


<a-entity classname="clickable" geometry="primitive: plane; width: 3; height: 0.5" material="color: #000000" position="-3.89593 2.2 3.16747" rotation="-1.93 124.69648000000001 0" scale="1 1 0.00001" class="clickable"><a-text value="Oratorio" align="center" position="0 0 0.01" color="#FFFFFF" text=""></a-text></a-entity>