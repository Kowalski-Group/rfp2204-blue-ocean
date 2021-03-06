/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import data from '../public/data/data';

export default function SearchBar() {
	const [videoTitles, setVideoTitles] = useState(data);
	const [suggestedId, setSuggestedId] = useState([null]);
	const [text, setText] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	const currentTitles = [];
	const counter = 0;
	// useEffect(() => {
	// 	const loadData = async (token) => {
	// 		counter++;
	// 		const response = await axios.get(
	// 			'https://www.googleapis.com/youtube/v3/search',
	// 			{
	// 				params: {
	// 					part: 'snippet',
	// 					channelId: 'UCYi9TC1HC_U2kaRAK6I4FSQ',
	// 					maxResults: 10000,
	// 					order: 'viewCount',
	// 					type: 'video',
	// 					key: 'AIzaSyBQMswsGngMimJXqKjqT22HtndmFc18zmY',
	// 					pageToken: token,
	// 				},
	// 			}
	// 		);
	// 		try {
	// 			console.log(response.data);
	// 			// eslint-disable-next-line no-plusplus
	// 			for (let i = 0; i < response.data.items.length; i++) {
	// 				currentTitles.push({
	// 					title: response.data.items[i].snippet.title,
	// 					id: response.data.items[i].id.videoId,
	// 				});
	// 			}
	// 		} catch (error) {
	// 			console.log(error);
	// 		}

	// 		console.log('current Pull Titles', currentTitles);
	// 		console.log('response object per page', response.data);
	// 		setVideoTitles(currentTitles);
	// 		if (response.data.nextPageToken) {
	// 			loadData(response.data.nextPageToken);
	// 		}
	// 		// if (counter < 2) {
	// 		// 	loadData(response.data.nextPageToken);
	// 		// }
	// 	};

	// 	loadData();
	// }, []);

	// if the response object has a nextPage key,
	// call again

	const onChangeHandler = (words) => {
		let matches = [];
		if (words.length > 0) {
			matches = videoTitles.filter((title) => {
				const regex = new RegExp(`${words}`, 'gi');
				return title.title.match(regex);
			});
		}
		console.log('matches', matches);
		setSuggestions(matches);
		setText(words);
	};
	const onSuggestHandler = (suggestion) => {
		setText(suggestion.title);
		setSuggestedId(suggestion.id);
		setSuggestions([]);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(suggestedId);
		// changeVideoId(suggestedId);
	};
	return (
		<div className='flex-col w-1/6' id='SearchBarWrapper'>
			<form className='flex columns-md' onSubmit={(e) => onSubmitHandler(e)}>
				<input
					className='flex self-center justify-self-center w-full'
					type='text'
					onChange={(e) => onChangeHandler(e.target.value)}
					value={text}
				/>
			</form>
			{suggestions &&
				suggestions.map((suggestion, i) => (
					<div
						className='flex-col columns-md border-r border-l border-b border-black justify-content-center cursor-text'
						key={i}
						onClick={() => onSuggestHandler(suggestion)}>
						{' '}
						{suggestion.title}{' '}
					</div>
				))}
		</div>
	);
}
