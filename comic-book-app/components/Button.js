import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Button.module.css";

export function Button() {
	return (
		<div>
            <FontAwesomeIcon icon={faBolt} />
        </div>
	)
}