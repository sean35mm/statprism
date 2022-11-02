import React from 'react';
import { Grid } from 'react-loader-spinner';
import Image from 'next/image';
import millify from 'millify';
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';
import {
	coinDetailsQuery,
	coinTwitterFeed,
	todayOHLC,
	cryptoHistoryQuery
} from '../../lib/queries';
import { useQuery } from 'react-query';
import { Tweet } from 'react-twitter-widgets';
import { data } from 'autoprefixer';

const CoinDetail = () => {
	// OBTAIN ID WITH NEXT/ROUTER
	const router = useRouter();
	const coinId = router.query.id;

	// RUN PARALLEL QUERIES
	const { data: coinDetails, isLoading: coinDetailsLoading } = useQuery('coinDetails', () =>
		coinDetailsQuery(coinId)
	);

	const { data: twitterFeed, isLoading: twitterFeedLoading } = useQuery('twitterFeed', () =>
		coinTwitterFeed(coinId)
	);

	// LOADING STATE
	if (coinDetailsLoading === true) {
		return <div>Loading...</div>;
	} else if (twitterFeedLoading === true) {
		return <div>Loading...</div>;
	} else
		return (
			<div className='flex flex-col items-center w-full font-titillium'>
				<div className='border-2 mt-4 flex w-1/2 justify-around place-items-center'>
					<div>
						<Image src={coinDetails?.logo} alt='coin logo' width={150} height={150} />
					</div>
					<div>
						<div>
							<h1 className='text-2xl font-bold'>
								{coinDetails?.name} - {coinDetails?.symbol}
							</h1>
							<h3>Rank: {coinDetails?.rank}</h3>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href={coinDetails?.whitepaper?.link}
								alt='whitepaper'
								className='link link-primary'
							>
								White Paper
							</a>
						</div>
					</div>
				</div>
				<div className='flex justify-around mt-8'>
					<div>
						<h3 className='text-lg'>Latest Tweets</h3>
						{twitterFeed?.map((tweet) => {
							return (
								<div key={tweet?.status_id} className='flex flex-wrap'>
									<Tweet tweetId={tweet?.status_id} options={{ width: '600' }} />
								</div>
							);
						})}
					</div>
					<div className='w-1/2'>
						<h3 className='text-lg'>{coinDetails?.description}</h3>
					</div>
				</div>
			</div>
		);
};

export default CoinDetail;
