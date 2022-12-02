import Head from 'next/head'
import { Comic } from '../components/Comic'
import styles from '../styles/Home.module.css'

function Home() {
	return (
		<div>
			<Head>
				<title>Comic Book Search</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Comic styles={{styles}}/>
		</div>
	)
}

export default Home;
