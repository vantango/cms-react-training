import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero"
import { Filter } from "../components/Filter";
import { Comic } from "../components/Comic";
import { Favorites } from "../components/Favorites";
import { Footer } from "../components/Footer";
import { Pagination } from "../components/Pagination";
import { fetchAPI } from "../hooks/fetchAPI";
import styles from "../styles/Grid.module.css";


function Home() {
	const [comicsFetch] = fetchAPI();

	return (
		<div>
			<Head>
				<title>Comic Book Search</title>
			</Head>
			<Header />
			<Hero />
			<div className={styles.grid_container}>
				<div className={styles.filter_item}>
					<Filter  />
				</div>
				<main
					className={styles.comic_item}
					style={{
						display: "grid",
						gridGap: "1rem",
						gridTemplateColumns: "repeat(auto-fill, 300px)",
						backgroundColor: "#F8F8F2",
						padding: "20px",
					}}
				>
					{comicsFetch &&
						comicsFetch.map((comic): any => {
							console.log("map", comic)
							return <Comic key={comic.id} {...comic} />;
						})}
				<Pagination />
				</main>
				<div className={styles.favorites_item}>
					<Favorites />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
