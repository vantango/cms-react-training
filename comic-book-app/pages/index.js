import Head from "next/head";
import { Comic } from "../components/Comic";
import { fetchAPI } from "../hooks/fetchAPI";

function Home() {
	const [comicsFetch] = fetchAPI();
	console.log("fetch", comicsFetch);

	return (
		<div>
			<Head>
				<title>Comic Book Search</title>
			</Head>

			<main
				style={{
					display: "grid",
					gridGap: "1rem",
					gridTemplateColumns: "repeat(auto-fill, 300px)",
					backgroundColor: "#F8F8F2",
					padding: "20px",
				}}
			>
				{comicsFetch &&
					comicsFetch.map((comic) => {
						return <Comic key={comic.id} {...comic} />;
					})}
			</main>
		</div>
	);
}

export default Home;
