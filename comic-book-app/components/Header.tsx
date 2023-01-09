import React from 'react';
import Image from "next/image";
import styles from "../styles/Header.module.css";
import logo from "../public/logo.svg"


export function Header() {
	return (
		<nav className={styles.header_container}>
			<div>
				<Image src={logo} alt="comic logo" />
			</div>
			<ul>
				<li>
					<a>Home</a>
				</li>
				<li>
					<a>Shop</a></li>
				<li>
					<a>My Favorites</a>
				</li>
			</ul>
		</nav>
	)
}