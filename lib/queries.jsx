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

export const coinDetailsQuery = async (coinId) => {
	const data = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
	return data.json();
};

export const coinTwitterFeed = async (coinId) => {
	const data = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}/twitter`);
	return data.json();
};

export const todayOHLC = async (coinId) => {
	const data = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/today/`);
	return data.json();
};

export const historicalOHLC = async (coinId) => {
	const data = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical`);
	return data.json();
};

export const listExchanges = async () => {
	const data = await fetch('https://api.coinpaprika.com/v1/exchanges');
	return data.json();
};

export const exchangeDetailsQuery = async (exchangeId) => {
	const data = await fetch(`https://api.coinpaprika.com/v1/exchanges/${exchangeId}`);
	return data.json();
};
