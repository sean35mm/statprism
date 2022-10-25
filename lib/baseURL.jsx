export const baseURL = () => {
	return 'https://api.coinpaprika.com/v1';
};

export const coinDetailURL = (coinId) => {
	return `https://api.coinpaprika.com/v1/coins/${coinId}`;
};
