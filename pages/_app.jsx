/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import '../styles/globals.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AnimatePresence } from 'framer-motion';

export const videoIdContext = React.createContext();
export const updateIdContext = React.createContext();
function App({ Component, pageProps }) {
	const [videoId, setVideoId] = useState(null);

	const changeVideoId = (newId) => {
		console.log(newId);
		setVideoId(newId);
	};
	return (
		<UserProvider>
			<AnimatePresence>
				<videoIdContext.Provider value={videoId}>
					<Component {...pageProps} changeVideoId={changeVideoId} />
				</videoIdContext.Provider>
			</AnimatePresence>
		</UserProvider>
	);
}

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default App;

// <videoIdContext.Provider
// 				value={{ state: { videoId: videoId }, changeVideoId: changeVideoId }}></videoIdContext.Provider>
//         </videoIdContext.Provider>
