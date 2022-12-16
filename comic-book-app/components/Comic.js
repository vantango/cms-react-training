import { Detail } from "./Detail";
import Image from "next/image";
import styles from "../styles/Comic.module.css";

export function Comic(comic) {
	const { thumbnail, title, issueNumber, dates, creators } = comic;
	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`;
	};

	return (
		<div style={{ paddingBottom: "40px" }}>
			<Image
				className={styles.image}
				loader={myLoader}
				src={thumbnail.path + "." + thumbnail.extension}
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
