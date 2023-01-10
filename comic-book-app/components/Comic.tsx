import { Detail } from "./Detail";
import Image from "next/image";
import styles from "../styles/Comic.module.css";

type Thumbnail = {
	path: string,
	extension: string
}

type Creators = {
	available: number,
	items: Item[],
}

type Item = {
	name: string
}

type Loader = {
	src?: string,
	alt?: number,
	width?: number | string,
	height?: number | string,
	quality?: number | string,
}

type ComicProps = {
	thumbnail: Thumbnail,
	title: string,
	issueNumber: number,
	dates: string,
	creators: Creators
}

export function Comic(comic) {
	const { thumbnail, title, issueNumber, dates, creators }: ComicProps = comic;
	const myLoader = ({ src, width, quality }: Loader) => {
		return `${src}?w=${width}&q=${quality || 75}`;
	};

	return (
		<div style={{ paddingBottom: "40px" }}>
			<Image
				className={styles.image}
				loader={myLoader}
				src={thumbnail?.path + "." + thumbnail?.extension}
				alt="Picture of comic cover"
				width={300}
				height={400}
			/>
			<Detail
				title={title}
				issueNumber={issueNumber}
				dates={dates}
				creators={
					creators.available === 0 ? "None specified" : creators?.items[0]?.name
				}
			/>
		</div>
	);
}