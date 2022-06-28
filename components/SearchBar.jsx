import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function SearchBar() {
	const [apiData, setApiData] = useState([]);
	// const [dataSongs, setDataSongs] = useState(null);
	const [text, setText] = useState(null);
	// const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const response = await axios.get('https://reqres.in/api/users');
			setApiData(response.data.data);
		};

		loadData();
	}, []);

	const onChangeHandler = (words) => {
		let matches = [];
		if (words.length > 0) {
			matches = apiData.filter((user) => {
				const regex = new RegExp(`${text}`, 'gi');
				return user.email.match(regex);
			});
		}
		console.log('matches', matches);
		// setSuggestions(matches);
		setText(text);
	};
	return (
		<div className='flex w-full h-full m-10' id='SearchBarWrapper'>
			<div>{text}</div>
			<input
				className='flex self-center justify-self-center'
				type='text'
				onChange={(e) => onChangeHandler(e.target.value)}
				value={text}
			/>
		</div>
	);
}
