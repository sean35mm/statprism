import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navbar from '../components/Navbar/Navbar';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Navbar />
			<Component {...pageProps} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default MyApp;
