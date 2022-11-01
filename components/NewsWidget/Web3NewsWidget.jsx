import React from 'react';
import { useQuery } from 'react-query';
import { getWeb3News } from '../../lib/queries';
import Image from 'next/image';
import placeholderImage from '../../lib/images/newsIcon.jpg';

const Web3NewsWidget = () => {
	const { data, isLoading } = useQuery('web3 news', getWeb3News);

	if (isLoading) return <div>Loading...</div>;

	const widgetList = data.value.slice(0, 4);

	return (
		<div className='w-1/2'>
			<h1 className='text-2xl text-primary font-bold my-6'>Latest Web3 News</h1>
			<div className='border-[1px] rounded-md border-primary'>
				{widgetList.map((article) => (
					<div key={article.type} className='flex justify-between p-6 border-b hover:bg-base-200'>
						<div className='relative'>
							<Image
								src={
									article.image?.thumbnail.contentUrl
										? article.image?.thumbnail.contentUrl
										: placeholderImage
								}
								alt='news article image'
								width={100}
								height={100}
								objectFit='fill'
								className='rounded-xl'
							/>
						</div>
						<div className='flex flex-col text-end w-3/4'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href={article.url}
								className='underline text-lg'
							>
								{article.name}
							</a>
							<p className='text-primary italic'>{article.category ? article.category : 'Web3'}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Web3NewsWidget;
