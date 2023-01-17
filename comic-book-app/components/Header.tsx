import React from 'react';
import Image from "next/image";
import styles from "../styles/Header.module.css";
import logo from "../public/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";


export function Header() {
	return (
		<nav className={styles.header_container}>
			<div>
				<Image
					src={logo}
					alt="comic logo"
				/>
			</div>
			<ul className={styles.header_list}>
				<li className={styles.header_list_item}>
					<a>Home</a>
				</li>
				<li className={styles.header_list_item}>
					<a>Shop</a>
				</li>
				<li className={styles.header_list_item}>
					<FontAwesomeIcon icon={faBoltLightning} />
					<a>My Favorites (3)</a>
				</li>
			</ul>
		</nav>
	)
}