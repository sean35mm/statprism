export const getNews = async () => {
	const data = await fetch(
		`https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=100`,
		{
			headers: {
				'x-bingapis-sdk': 'true',
				'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
				'x-rapidapi-key': '5a1374bff5mshc7eafcdbc334f57p11c8fdjsnf1bdce29ea77'
			}
		}
	);
	return data.json();
};

export const listCoins = async () => {
	const data = await fetch('https://api.coinpaprika.com/v1/coins');
	return data.json();
};
