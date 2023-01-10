import React from 'react';
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import logo from "../public/logo.svg"

export function Footer() {
	return (
		<footer className={styles.footer_container}>
			<Image src={logo} alt="comic logo" />
			<div className="footer-links">
				<a href="" className="privacy">Privacy Policy</a>
				<a href="" className="terms">Terms of Service</a>
			</div>
			<div className="copyright">Copyright 2022. Comic Closet, LLC. All rights reserved.</div>
		</footer>
	)
}