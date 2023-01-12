import React from 'react';
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import logo from "../public/logo.svg"

export function Footer() {
	return (
		<footer className={styles.footer_container}>
			<Image className={styles.footer_logo} src={logo} alt="comic logo" />
			<div className={styles.footer_policy_container}>
				<a href="#" className={styles.footer_policy_text}>Privacy Policy</a>
				<p>|</p>
				<a href="#" className={styles.footer_policy_text}>Terms of Service</a>
			</div>
			<div className={styles.footer_copyright}>Copyright 2022. Comic Closet, LLC. All rights reserved.</div>
		</footer>
	)
}