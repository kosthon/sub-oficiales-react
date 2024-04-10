/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 plant.gltf 
*/

import React from 'react';
import {useGLTF} from '@react-three/drei';

export default function Model(props) {
	const {nodes, materials} = useGLTF('/models/plant.gltf');
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.potted_plant_01_stem.geometry}
				material={materials.potted_plant_01_pot}
			/>
			<mesh
				geometry={nodes.potted_plant_01_pebbles.geometry}
				material={materials.potted_plant_01_pot}
				position={[0, -3.014, 0]}
				scale={6}
			/>
			<mesh
				geometry={nodes.potted_plant_01_pot.geometry}
				material={materials.potted_plant_01_pot}
				position={[0, -3.014, 0]}
				scale={6}
			/>
			<mesh
				geometry={nodes.potted_plant_01_leaves.geometry}
				material={materials.potted_plant_01_leaves}
				position={[0, -3.014, 0]}
				scale={6}
			/>
		</group>
	);
}

useGLTF.preload('/plant.gltf');
