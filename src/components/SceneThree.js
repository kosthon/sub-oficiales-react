import React from 'react';
import {Sky, Image, Entity} from 'react-aframe-ar';

export default function SceneThree({visible, changeScene}) {
	return (
		<Entity id='SceneThree' visible={visible}>
			<Sky src='/img/checkIn.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='-2 0.5 2'
				rotation='0 160 -10'
				events={{
					mouseenter: e => {
						e.target.setAttribute('scale', {x: 1.2, y: 1.2, z: 1.2});
						e.target.setAttribute(
							'animation__mouseenter',
							'property: scale; to: 1.5 1.5 1.5; dur: 350; easing: linear;'
						);
					},
					mouseleave: e => {
						e.target.setAttribute('scale', {x: 1, y: 1, z: 1});
						e.target.removeAttribute('animation__mouseenter');
					},
					click: () => changeScene('SceneFour'),
				}}
				className={visible ? 'clickable' : ''}
			>
				<Image src='/img/ArrowYw.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>

			<Entity
				geometry='primitive: plane; width: 1; height: 1;'
				material='color: #000000;'
				position='-5.5 2.9 -8'
				rotation='5.527896807422183 38.19107479224016 2.0139466498848435'
				className={visible ? 'clickable' : ''}
				events={{click: () => changeScene('SceneTwo')}}
			>
				<Image src='/img/Salida.png' width='1' height='1' position='0 0 0' />
			</Entity>
			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='0 0.5 -3'
				rotation='0 0 0'
				events={{
					mouseenter: e => {
						e.target.setAttribute('scale', {x: 1.2, y: 1.2, z: 1.2});
						e.target.setAttribute(
							'animation__mouseenter',
							'property: scale; to: 1.5 1.5 1.5; dur: 350; easing: linear;'
						);
					},
					mouseleave: e => {
						e.target.setAttribute('scale', {x: 1, y: 1, z: 1});
						e.target.removeAttribute('animation__mouseenter');
					},
					click: () => changeScene('SceneTwo'),
				}}
				className={visible ? 'clickable' : ''}
			>
				<Image src='/img/ArrowYw.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>
		</Entity>
	);
}

<a-entity
	classname='clickable'
	geometry='primitive: plane; width: 3; height: 0.5'
	material='color: #000000'
	position='-3.89593 2.2 3.16747'
	rotation='-1.93 124.69648000000001 0'
	scale='1 1 0.00001'
	class='clickable'
>
	<a-text value='Oratorio' align='center' position='0 0 0.01' color='#FFFFFF' text=''></a-text>
</a-entity>;
