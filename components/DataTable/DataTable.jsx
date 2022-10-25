import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table';

const DataTable = () => {
	const router = useRouter();
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
		// topCoins,
		columns,
		getCoreRowModel: getCoreRowModel()
	});

	const listCoins = async () => {
		const data = await fetch('https://api.coinpaprika.com/v1/coins');
		return data.json();
	};

	const { data, isLoading } = useQuery('allCoins', listCoins);

	if (isLoading) return <p>Loading coins...</p>;

	const topCoins = data.slice(0, 100);

	return (
		<div>
			<h1 className='text-3xl normal-case font-bold text-primary mb-4'>Top 100 Coins</h1>
			<div className='flex flex-col border-primary border-[1px] rounded-xl'>
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
									{topCoins.map((coin) => {
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
