import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function SearchBar() {
	const [videoTitles, setVideoTitles] = useState([]);
	// const [dataSongs, setDataSongs] = useState(null);
	const [text, setText] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const currentTitles = [];

	useEffect(() => {
		const loadData = async (nextToken) => {
			const response = await axios.get(
				'https://www.googleapis.com/youtube/v3/search',
				{
					params: {
						part: 'snippet',
						channelId: 'UCbqcG1rdt9LMwOJN4PyGTKg',
						maxResults: 10000,
						order: 'viewCount',
						type: 'video',
						key: 'AIzaSyDRPMMIJxU9Bveb5u45mUafAykU35xKqt0',
						pageToken: nextToken,
					},
				}
			);
			try {
				console.log(response.data);
				for (let i = 0; i < response.data.items.length; i + 1) {
					currentTitles.push(response.data.items[i].snippet.title);
				}
			} catch (error) {
				console.log(error);
			}

			console.log('current Pull Titles', currentTitles);
			setVideoTitles(currentTitles);
			console.log('Actual state titles', videoTitles);
			if (response.data.nextPageToken) {
				loadData(response.data.nextPageToken);
			}
		};

		loadData();
	});

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
				suggestions.map((suggestion) => (
					<div key={suggestion}> {suggestion} </div>
				))}
		</div>
	);
}
