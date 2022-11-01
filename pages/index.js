import { useQuery } from 'react-query';
import Stats from '../components/Stats/Stats';
import DataTable from '../components/DataTable/DataTable';
import NewsWidget from '../components/NewsWidget/NewsWidget';
import Web3NewsWidget from '../components/NewsWidget/Web3NewsWidget';

export default function Home() {
	return (
		<div className='m-4 flex flex-col'>
			<Stats />
			<div className='flex'>
				<NewsWidget />
				<Web3NewsWidget />
			</div>
			<DataTable />
		</div>
	);
}
