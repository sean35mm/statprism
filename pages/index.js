import { useQuery } from 'react-query';
import Stats from '../components/Stats/Stats';
import DataTable from '../components/DataTable/DataTable';
import NewsWidget from '../components/NewsWidget/NewsWidget';

export default function Home() {
	return (
		<div className='m-4 flex flex-col items-center'>
			<Stats />
			<div className='w-4/5'>
				<NewsWidget />
				<DataTable />
			</div>
		</div>
	);
}
