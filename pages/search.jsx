/* eslint-disable import/no-named-as-default-member */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

import SearchBar from '../components/SearchBar';

export default function Search() {
	return (
		<div className='flex'>
			<SearchBar />
			<video className='flex' src='https://youtu.be/b22Sd5AtS3c' />
		</div>
	);
}
