/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

// import axios from 'axios';

export default function SearchBar() {
	const [videoTitles, setVideoTitles] = useState([]);
	const [suggestedId, setSuggestedId] = useState([null]);
	const [text, setText] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	// const value = useContext(videoIdContext);
	// useEffect(() => {
	// 	const currentTitles = [];
	// 	const loadData = async (token) => {
	// 		const response = await axios.get(
	// 			'https://www.googleapis.com/youtube/v3/search',
	// 			{
	// 				params: {
	// 					part: 'snippet',
	// 					channelId: 'UCYi9TC1HC_U2kaRAK6I4FSQ',
	// 					maxResults: 10000,
	// 					order: 'viewCount',
	// 					type: 'video',
	// 					key: 'AIzaSyDtmdx_GNC3vI1xt4Wrc-tqzxFIvyh9DZ4',
	// 					nextPageToken: token,
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

	// 		// console.log('current Pull Titles', currentTitles);
	// 		setVideoTitles(currentTitles);
	// 		if (response.data.nextPageToken) {
	// 			loadData(response.data.nextPageToken);
	// 		}
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
	// const { changeVideoId } = value.changeVideoId;
	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(suggestedId);
		// changeVideoId(suggestedId);
	};
	return (
		<div className='table-column' id='SearchBarWrapper'>
			<form className='flex' onSubmit={(e) => onSubmitHandler(e)}>
				<input
					className='flex'
					type='text'
					onChange={(e) => onChangeHandler(e.target.value)}
					value={text}
				/>
			</form>
			{suggestions &&
				suggestions.map((suggestion, i) => (
					<div
						className='flex'
						key={i}
						onClick={() => onSuggestHandler(suggestion)}>
						{' '}
						{suggestion.title}{' '}
					</div>
				))}
		</div>
	);
}
