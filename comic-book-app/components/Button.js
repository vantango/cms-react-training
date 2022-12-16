import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Button.module.css";

export function Button() {
	return (
		<div className={styles.button}>
			<FontAwesomeIcon icon={faBoltLightning} />
		</div>
	);
}
