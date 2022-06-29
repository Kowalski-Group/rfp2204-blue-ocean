import React, { useContext, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';

import Layout from '../components/Layout/Layout';
import { videoIdContext } from './_app';

export default function Play() {
	const [Loaded, setLoaded] = useState(false);

	const currentVideoId = useContext(videoIdContext);
	useEffect(() => {
		if (currentVideoId !== null) {
			setLoaded(true);
		}
	}, [currentVideoId]);
	const opts = {
		playerVars: {
			controls: 1,
			rel: 0,
			showinfo: false,
			autoplay: false,
		},
	};

	return (
		<Layout>
			<div className='relative w-[100vw] h-[80vh] flex items-center justify-center'>
				<Image
					className='object-cover w-full scale-125'
					src='/karaoke-background.jpg'
					alt='logo'
					layout='fill'
				/>
				<YouTube
					className='absolute top-[40%] object-cover mx-auto'
					videoId={Loaded === true ? currentVideoId : 'rMSQwIp4Jg8'}
					opts={opts}
				/>
			</div>
		</Layout>
	);
}
