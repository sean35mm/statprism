import React, { useState } from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { listCoins } from '../../lib/queries';
import Pagination from './Pagination';

import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table';

const DataTable = () => {
	const [currPage, setCurrentPage] = useState(1);
	const [coinsPerPage] = useState(10);

	// DEFINE COLUMNS

	const columnHelper = createColumnHelper();

	const columns = [
		columnHelper.accessor('rank', {
			header: 'Rank',
			cell: (coin) => coin.rank
		}),
		columnHelper.accessor('symbol', {
			header: 'Symbol',
			cell: (coin) => coin.symbol
		}),
		columnHelper.accessor('name', {
			header: 'Name',
			cell: (coin) => coin.name
		}),
		columnHelper.accessor('type', {
			header: 'Type',
			cell: (coin) => coin.type
		}),
		columnHelper.accessor('', {
			header: 'Info'
		})
	];

	const table = useReactTable({
		// coinsOnTable,
		columns,
		getCoreRowModel: getCoreRowModel()
	});

	// FETCH COIN DATA

	const { data, isLoading } = useQuery('allCoins', listCoins);

	if (isLoading) return <p>Loading coins...</p>;

	//PAGINATION LOGIC
	const indexOfLastRecord = currPage * coinsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - coinsPerPage;
	const coinsOnTable = data.slice(indexOfFirstRecord, indexOfLastRecord);
	const topCoins = data.slice(0, 100);

	const paginateFront = () => setCurrentPage(currPage + 1);
	const paginateBack = () => setCurrentPage(currPage - 1);

	return (
		<div className='font-titillium'>
			<h1 className='text-2xl normal-case font-bold text-primary my-4'>Top 100 Coins</h1>
			<div className='flex flex-col border-primary rounded-md border-[1px]'>
				<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='overflow-hidden'>
							<table className='min-w-full'>
								<thead className='bg-white border-b'>
									{table.getHeaderGroups().map((header) => (
										<tr key={header.id}>
											{header.headers.map((head) => (
												<th
													key={head.id}
													scope='col'
													className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
												>
													{head.isPlaceholder
														? null
														: flexRender(head.column.columnDef.header, head.getContext())}
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody>
									{/* CANNOT USE UNLESS WITH TYPESCRIPT - FUTURE CHANGE */}
									{/* {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))} */}
									{coinsOnTable.map((coin) => {
										return (
											<tr key={coin.id} className='even:bg-base-200 border-b'>
												<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													{coin.rank}
												</td>
												<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													{coin.symbol}
												</td>
												<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													{coin.name}
												</td>
												<td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
													{coin.type}
												</td>
												<td className='text-sm text-primary font-light px-6 py-4 whitespace-nowrap'>
													<Link href={`/coin/${coin.id}`}>Details</Link>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
							<div className='flex justify-center my-2'>
								<Pagination
									coinsPerPage={coinsPerPage}
									totalCoins={topCoins.length}
									paginateBack={paginateBack}
									paginateFront={paginateFront}
									currentPage={currPage}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
