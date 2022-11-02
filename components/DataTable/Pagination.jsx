import React from 'react';

export default function Pagination({
	coinsPerPage,
	totalCoins,
	paginateFront,
	paginateBack,
	currentPage
}) {
	return (
		<div className='py-2 mt-2'>
			<div>
				<p className='text-sm text-gray-700'>
					Showing {currentPage * coinsPerPage - 10} to {currentPage * coinsPerPage} of {totalCoins}{' '}
					results
				</p>
			</div>
			<div className='mt-2'>
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
						className='btn btn-secondary w-20'
					>
						Previous
					</button>

					<button
						disabled={currentPage === 10}
						onClick={(e) => {
							e.preventDefault();
							paginateFront();
						}}
						href='#'
						className='btn btn-primary w-20'
					>
						Next
					</button>
				</nav>
			</div>
		</div>
	);
}
