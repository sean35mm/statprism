import { useQuery } from 'react-query';
import Stats from '../components/Stats/Stats';

export default function Home() {
	return (
		<div className='m-4 flex justify-center'>
			<Stats />
		</div>
	);
}
