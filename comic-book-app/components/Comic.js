import { Detail } from './Detail'
import { comicsData } from "../pages/api/comicsData";
import Image from 'next/image'
import styles from "../styles/Comic.module.css";

export function Comic() {
	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	const comicsMapped = comicsData.map((data) => {
		return (
			<div className={styles.comics}>
				<Image
					loader={myLoader}
					src={data.thumbnail}
					alt="Picture of the comic"
					width={300}
					height={500}
				/>
				<Detail 
					title={data.title} 
					issue={data.issueNumber} 
					date={data.publishDate} 
					creators={data.creators[0].name}
				/>
			</div>
		)
	})
	return (
		<div>
			{comicsMapped}
		</div>
	)
}