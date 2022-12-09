import Head from 'next/head'
import { Comic } from '../components/Comic'

function Home() {
	return (
		<div>
			<Head>
				<title>Comic Book Search</title>
			</Head>

			<main 
				style={{
					display: 'grid',
					gridGap: '1rem',
					gridTemplateColumns: 'repeat(auto-fill, 300px)',
					backgroundColor: '#F8F8F2',
					padding: '20px'}}>
				<Comic />
			</main>
		</div>
	)
}

export default Home;
