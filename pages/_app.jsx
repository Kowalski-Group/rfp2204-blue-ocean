/* eslint-disable no-unused-vars */
import '../styles/globals.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UserProvider } from '@auth0/nextjs-auth0';

export const videoIdContext = React.createContext();
export const updateIdContext = React.createContext();
function App({ Component, pageProps }) {
	const [videoId, setVideoId] = useState(null);

	// function changeVideoId(newId) {
	// 	setVideoId(newId);
	// }
	return (
		<UserProvider>
			<videoIdContext.Provider value={videoId}>
				<Component {...pageProps} />
			</videoIdContext.Provider>
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
