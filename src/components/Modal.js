import React, {useState, useEffect} from 'react';
import {IoClose} from 'react-icons/io5';
import HashLoader from 'react-spinners/HashLoader';
import './styles/Modal.css';

// eslint-disable-next-line react/prop-types
export default function Modal({onClose, children}) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3500);
		return () => clearTimeout(timer);
	}, []);

	const handleClose = () => {
		onClose(); // Cierra la modal
	};

	const handleOverlayClick = e => {
		e.stopPropagation(); // Evita que el clic en el overlay se propague al contenedor de la modal
	};

	return (
		<div className='modal-overlay' onClick={handleOverlayClick}>
			<div className='modal-content'>
				{loading ? <HashLoader color='#ffef00' size={100} /> : <>{children}</>}
			</div>
			<button className='modal-close' onClick={handleClose}>
				<IoClose />
			</button>
		</div>
	);
}
