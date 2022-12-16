import { Button } from "./Button";
import styles from "../styles/Detail.module.css";

export function Detail({ title, issueNumber, dates, creators }) {
	let dateFormat = new Date(
		dates.find((item) => (item.type = "focDate")).date
	).toLocaleDateString("en-us", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<div className={styles.comics}>
			<Button />
			<section>
				<h2 className={styles.detail_title}>{title}</h2>
				<div>
					<div className={styles.details_wrapper}>
						<h3 className={styles.detail_labels}>Issue: </h3>
						<p className={styles.detail_values}>{issueNumber}</p>
					</div>
					<div className={styles.details_wrapper}>
						<h3 className={styles.detail_labels}>Date Published:</h3>
						<p className={styles.detail_values}>{dateFormat}</p>
					</div>
					<div className={styles.details_wrapper}>
						<h3 className={styles.detail_labels}>Creators: </h3>
						<p className={styles.detail_values}> {creators}</p>
					</div>
				</div>
			</section>
		</div>
	);
}
