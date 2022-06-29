/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function SearchBar() {
	const [videoTitles, setVideoTitles] = useState([]);
	// const [dataSongs, setDataSongs] = useState(null);
	const [text, setText] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const currentTitles = [];
		const loadData = async (nextKey) => {
			const response = await axios.get(
				'https://www.googleapis.com/youtube/v3/search',
				{
					params: {
						part: 'snippet',
						channelId: 'UCbqcG1rdt9LMwOJN4PyGTKg',
						maxResults: 100,
						order: 'viewCount',
						type: 'video',
						key: 'AIzaSyArn-2Zmkc7rIZNrF2Ie2I2tMzpdOVMwt8',
						nextPageToken: nextKey,
					},
				}
			);
			try {
				console.log(response.data);
				for (let i = 0; i < response.data.items.length; i += 1) {
					currentTitles.push(response.data.items[i].snippet.title);
				}
			} catch (error) {
				console.log(error);
			}

			// console.log('current Pull Titles', currentTitles);
			setVideoTitles(currentTitles);
			if (response.data.nextPageToken) {
				loadData(response.data.nextPageToken);
			}
			// console.log(videoTitles);
		};

		loadData();
	}, []);

	// if the response object has a nextPage key,
	// call again

	const onChangeHandler = (words) => {
		let matches = [];
		if (words.length > 0) {
			matches = videoTitles.filter((title) => {
				const regex = new RegExp(`${words}`, 'gi');
				return title.match(regex);
			});
		}
		console.log('matches', matches);
		setSuggestions(matches);
		setText(words);
	};
	return (
		<div className='flex w-full h-full m-10' id='SearchBarWrapper'>
			<input
				className='flex self-center justify-self-center'
				type='text'
				onChange={(e) => onChangeHandler(e.target.value)}
				value={text}
			/>
			{suggestions &&
				suggestions.map((suggestion, i) => <div key={i}> {suggestion} </div>)}
		</div>
	);
}
