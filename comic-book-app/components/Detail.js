import Image from 'next/image'
import { comicsData } from "../pages/api/comicsData";
import detail from '../styles/Detail.module.css'

export function Detail() {
	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}
	
	const comicsMap = comicsData.map((data) => {
		let formattedDate = new Date(data.publishDate).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})

		return (
			<div key={data.id} className={detail.comics}>
				<Image
					loader={myLoader}
					src={data.thumbnail}
					alt="Picture of the comic"
					width={300}
					height={500}
				/>
				<div>
					<h3>Title: </h3>
					<p>{data.title}</p>
					<h3>Issue: </h3>
					<p>{data.issueNumber}</p>
					<h3>Date Published: </h3>
					<p>{formattedDate}</p>
					<h3>Creators: </h3>
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