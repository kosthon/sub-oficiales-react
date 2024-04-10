import React, {useState, Suspense} from 'react';

import Modal from './Modal';
import Plant from './Plant';
import {Canvas} from '@react-three/fiber';
import {Sky, Entity, Image} from 'react-aframe-ar';
import {OrbitControls, Environment} from '@react-three/drei';

import './styles/Models.css';

export default function SceneOne({visible, changeScene}) {
	const [modalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => {
		console.log('CLIKC!!');
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const handleSceneChange = () => {
		changeScene('SceneTwo');
	};

	return (
		<Entity id='SceneOne' visible={visible}>
			<Sky src='/img/entrance.jpg' rotation='0 -130 0' />

			<Entity
				geometry='primitive: plane; width: 1; height: 1;'
				position='-10 2.8 -4'
				rotation='0 50 5'
				className={visible ? 'clickable' : ''}
				scale='1.13 1 0.04'
				events={{click: handleOpenModal}}
			>
				<Image src='/img/Salida.png' width='1' height='1' position='0 0 0' />
			</Entity>

			<Entity
				geometry='primitive: plane; width: 0.5; height: 0.5;'
				material='transparent: true; visible: false'
				position='-4 0.2 -3'
				rotation='-0 60 0'
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
					click: handleSceneChange,
				}}
				className={visible ? 'clickable' : ''}
			>
				<Image src='/img/ArrowYw.png' width='0.5' height='0.5' position='0 0 0' />
			</Entity>

			{modalOpen && (
				<Modal onClose={handleCloseModal}>
					<Canvas>
						<ambientLight />
						<OrbitControls />
						<Suspense fallback={null}>
							<Plant />
						</Suspense>
						<Environment preset='sunset' />
					</Canvas>
				</Modal>
			)}
		</Entity>
	);
}
