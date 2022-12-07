import { Button } from './Button'
import styles from '../styles/Detail.module.css'

export function Detail({title, issue, date, creators}) {
	let dateFormat = new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})

	return (
		<div>
			<Button />
			<div>
				<h3>Title: </h3>
				<p>{title}</p>
				<h3>Issue: </h3>
				<p>{issue}</p>
				<h3>Date Published: </h3>
				<p>{dateFormat}</p>
				<h3>Creators: </h3>
				<p>{creators}</p>
			</div>
		</div>
	)
}