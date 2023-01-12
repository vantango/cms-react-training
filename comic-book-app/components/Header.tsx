import React from 'react';
import Image from "next/image";
import styles from "../styles/Header.module.css";
import logo from "../public/logo.svg"


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
				<li>
					<a>Home</a>
				</li>
				<li>
					<a>Shop</a></li>
				<li>
					<i></i>
					<a>My Favorites</a>
				</li>
			</ul>
		</nav>
	)
}