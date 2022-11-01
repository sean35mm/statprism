import React from 'react';
import { useQuery } from 'react-query';
import millify from 'millify';
import { DateTime } from 'luxon';

const Stats = () => {
	const getGlobalStats = async () => {
		const data = await fetch('https://api.coinpaprika.com/v1/global');
		return data.json();
	};

	const { data, isLoading } = useQuery('global', getGlobalStats);

	if (isLoading) return <p>Loading...</p>;

	return (
		<div className='flex flex-wrap justify-evenly font-titillium'>
			<div className='stats shadow bg-base-200 mx-2 my-2'>
				<div className='stat'>
					<div className='stat-title'>Market Cap</div>
					<div className='stat-value text-primary'>
						${millify(data.market_cap_usd, { precision: 2 })}
					</div>
					<div className='stat-desc'>Global</div>
				</div>
			</div>
			<div className='stats shadow bg-base-200 mx-2 my-2'>
				<div className='stat'>
					<div className='stat-title'>Market Cap Change</div>
					<div className='stat-value text-primary'>
						{millify(data.market_cap_change_24h, { precision: 2 })}%
					</div>
					<div className='stat-desc'>Last 24 Hours</div>
				</div>
			</div>
			<div className='stats shadow bg-base-200 mx-2 my-2'>
				<div className='stat'>
					<div className='stat-title'>Market Cap All Time High</div>
					<div className='stat-value text-primary'>
						${millify(data.market_cap_ath_value, { precision: 2 })}
					</div>
					<div className='stat-desc'>
						Date: {DateTime.fromISO(`${data.market_cap_ath_date}`).toLocaleString()}
					</div>
				</div>
			</div>
			<div className='stats shadow bg-base-200 mx-2 my-2'>
				<div className='stat'>
					<div className='stat-title'>Volume</div>
					<div className='stat-value text-primary'>${millify(data.volume_24h_usd)}</div>
					<div className='stat-desc'>Global</div>
				</div>
			</div>
			<div className='stats shadow bg-base-200 mx-2 my-2'>
				<div className='stat'>
					<div className='stat-title'>Volume Change</div>
					<div className='stat-value text-primary'>
						{millify(data.volume_24h_change_24h, { precision: 2 })}%
					</div>
					<div className='stat-desc'>Last 24 Hours</div>
				</div>
			</div>
			<div className='stats shadow bg-base-200 mx-2 my-2'>
				<div className='stat'>
					<div className='stat-title'>Volume All Time High</div>
					<div className='stat-value text-primary'>
						${millify(data.volume_24h_ath_value, { precision: 2 })}
					</div>
					<div className='stat-desc'>
						Date: {DateTime.fromISO(`${data.volume_24h_ath_date}`).toLocaleString()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
