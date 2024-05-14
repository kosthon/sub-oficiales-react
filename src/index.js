import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'aframe';
import { Scene } from 'react-aframe-ar';
import HashLoader from 'react-spinners/HashLoader';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function LoadingScreen() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#202020' }}>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
				<HashLoader color='#ffef00' size={80} />
			</div>
		</div>
	);
}

function AppWithLoading() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 2500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<React.StrictMode>
					<Scene>
						<App />
					</Scene>
				</React.StrictMode>
			)}
		</>
	);
}

root.render(
	<AppWithLoading />
);
