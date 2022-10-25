import React from 'react';
import { useQuery } from 'react-query';

const NewsWidget = () => {
	const getNews = async () => {
		const data = await fetch(
			'https://cryptopanic.com/api/v1/posts/?auth_token=1d9e517db0ed9ee3aeaa233a1b576df15d74450a'
		);
		return data.json();
	};

	const { data, isLoading } = useQuery('news', getNews);
	console.log(data);

	return (
		<div>
			<h1>News</h1>
		</div>
	);
};

export default NewsWidget;
