import React from 'react';

import { useRouter } from 'next/router';

const CoinDetail = () => {
	const router = useRouter();

	const coinId = router.query.id;
	console.log(coinId);

	return <div>{coinId}</div>;
};

export default CoinDetail;
