import React from 'react';
import { useRouter } from 'next/router';
import {
	coinDetailsQuery,
	coinTwitterFeed,
	todayOHLC,
	cryptoHistoryQuery
} from '../../lib/queries';
import { useQuery } from 'react-query';

const CoinDetail = () => {
	// OBTAIN ID WITH NEXT/ROUTER
	const router = useRouter();
	const coinId = router.query.id;

	const coinDetails = useQuery('coin details', () => coinDetailsQuery(coinId));
	const coinDetailsData = coinDetails.data;
	console.log(coinDetails);

	return (
		<div>
			<div>
				<div>logo</div>
				<div>todays stats</div>
			</div>
			<div>twitter feed</div>
			<div>description box</div>
			<div>chart ?</div>
		</div>
	);
};

export default CoinDetail;
