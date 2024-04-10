import React from 'react';
import {Sky, Image, Entity} from 'react-aframe-ar';

export default function SceneFour({visible, changeScene}) {
	return (
		<Entity id='SceneFour' visible={visible}>
			<Sky src='/img/oratorio.jpg' rotation='0 -130 0' />
			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='2 0.5 -2.5'
				rotation='0 -45 0'
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
					click: () => changeScene('SceneThree'),
				}}
				className={visible ? 'clickable' : ''}
			>
				<Image src='/img/ArrowYw.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>
		</Entity>
	);
}
