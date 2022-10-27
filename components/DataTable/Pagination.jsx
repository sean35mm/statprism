import React from 'react';

export default function Pagination({
	coinsPerPage,
	totalCoins,
	paginateFront,
	paginateBack,
	currentPage
}) {
	return (
		<div className='py-2'>
			<div>
				<p className='text-sm text-gray-700'>
					Showing {currentPage * coinsPerPage - 10} to {currentPage * coinsPerPage} of {totalCoins}{' '}
					results
				</p>
			</div>
			<div>
				<nav
					className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
					aria-label='Pagination'
				>
					<button
						disabled={currentPage === 1}
						onClick={(e) => {
							e.preventDefault();
							paginateBack();
						}}
						href='#'
						className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
					>
						<span>Previous</span>
					</button>

					<button
						disabled={currentPage === 10}
						onClick={(e) => {
							e.preventDefault();
							paginateFront();
						}}
						href='#'
						className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
					>
						<span>Next</span>
					</button>
				</nav>
			</div>
		</div>
	);
}
