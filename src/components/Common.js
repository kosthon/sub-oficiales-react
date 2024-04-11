import 'aframe';
import React from 'react';
import {Cursor, Camera} from 'react-aframe-ar';

export default function Common() {
	return (
		<>
			<Camera>
				<Cursor
					cursor='fuse: true;'
					raycaster={{objects: '.clickable'}}
					geometry='primitive: ring; '
					color='#FFFFF'
				/>
			</Camera>
		</>
	);
}
