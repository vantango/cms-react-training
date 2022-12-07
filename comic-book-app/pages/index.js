import Head from 'next/head'
import { Comic } from '../components/Comic'
import styles from '../styles/Home.module.css'

function Home() {
	return (
		<div>
			<Head>
				<title>Comic Book Search</title>
			</Head>

			<main>
				<Comic />
			</main>
		</div>
	)
}

export default Home;
