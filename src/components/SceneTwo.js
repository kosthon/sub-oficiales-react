// SceneTwo.js
import React from 'react';
import {Sky, Entity, Image} from 'react-aframe-ar';

export default function SceneTwo({visible, changeScene}) {
	return (
		<Entity id='SceneTwo' visible={visible}>
			<Sky src='/img/paraiso/parqueadero1.jpg' rotation='0 -130 0' />


			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='1.676 0 -3.741'
				rotation='7.419 4.522 -10.770'
				scale= '2 2 2'
				events={{
					mouseenter: e => {
						e.target.setAttribute('scale', {x: 2.2, y: 2.2, z: 2.2});
						e.target.setAttribute(
							'animation__mouseenter',
							'property: scale; to: 2.5 2.5 2.5; dur: 350; easing: linear;'
						);
					},
					mouseleave: e => {
						e.target.setAttribute('scale', {x: 2, y: 2, z: 2});
						e.target.removeAttribute('animation__mouseenter');
					},
					click: () => changeScene('SceneThree'),
				}}
				className={visible ? 'clickable' : ''}
			>
				<Image src='/img/ArrowYw.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>

			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='2.748 0.5 3.517'
				rotation='0 245 0'
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
					click: () => changeScene('SceneOne'),
				}}
				className={visible ? 'clickable' : ''}
			>
				<Image src='/img/ArrowYw.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>
		</Entity>
	);
}
