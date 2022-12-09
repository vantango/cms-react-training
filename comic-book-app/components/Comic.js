import { Detail } from './Detail'
import { comicsData } from "../pages/api/comicsData";
import { Fragment } from 'react';
import Image from 'next/image'
import styles from "../styles/Comic.module.css";

export function Comic() {
	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	const comicsMapped = comicsData.map((data) => {
		return (
			<div style={{paddingBottom: '40px'}}>
				<Image className={styles.image}
					loader={myLoader}
					src={data.thumbnail}
					alt="Picture of comic cover"
					width={300}
					height={400}
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
		<Fragment>
			{comicsMapped}
		</Fragment>
	)
}