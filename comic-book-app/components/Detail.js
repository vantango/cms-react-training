import Image from 'next/image'
import { comicsData } from "../pages/api/comicsData";

export function Detail() {
	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}
	
	const comicsMap = comicsData.map((data) => {
		return (
			<div style={{ display: "grid"}}>
				<Image
					loader={myLoader}
					src={data.thumbnail}
					alt="Picture of the comic"
					width={400}
					height={500}
				/>
				<div>
					<h3>Title: </h3>
					<p>{data.title}</p>
					<h3>Issue:</h3>
					<p>{data.issueNumber}</p>
					<h3>Date Published:</h3>
					<p>{data.publishDate}</p>
					<h3>Creators:</h3>
					<p>{data.creators[0].name}</p>
				</div>
			</div>
		)
	})
	return (
		<div>
			{comicsMap}
		</div>
	)
}