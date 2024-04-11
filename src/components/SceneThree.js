import React from 'react';
import { Sky, Image, Entity } from 'react-aframe-ar';

export default function SceneThree({ visible, changeScene }) {
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
						e.target.setAttribute('scale', { x: 1.2, y: 1.2, z: 1.2 });
						e.target.setAttribute(
							'animation__mouseenter',
							'property: scale; to: 1.5 1.5 1.5; dur: 350; easing: linear;'
						);
					},
					mouseleave: e => {
						e.target.setAttribute('scale', { x: 1, y: 1, z: 1 });
						e.target.removeAttribute('animation__mouseenter');
					},
					click: () => changeScene('SceneFour'),
				}}
				className={visible ? 'clickable' : ''}
			>
				<Image src='/img/ArrowYw.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>

			<Entity
				gltf-model='/models/plant/plant.gltf'
				position='-1 0 -1'
				scale='1 1 1'
				animation__postition='property: rotation; to: 0 3600 0; dir: alternate; dur: 7200; loop: true;'
			/>

			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='0 0.5 -3'
				rotation='0 0 0'
				events={{
					mouseenter: e => {
						e.target.setAttribute('scale', { x: 1.2, y: 1.2, z: 1.2 });
						e.target.setAttribute(
							'animation__mouseenter',
							'property: scale; to: 1.5 1.5 1.5; dur: 350; easing: linear;'
						);
					},
					mouseleave: e => {
						e.target.setAttribute('scale', { x: 1, y: 1, z: 1 });
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
