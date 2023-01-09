import React from 'react';
import styles from "../styles/Footer.module.css";

export function Footer() {
	return (
		<footer className={styles.footer_container}>
			<div className="logo"></div>
			<div className="footer-links">
				<a href="" className="privacy">Privacy Policy</a>
				<a href="" className="terms">Terms of Service</a>
			</div>
			<div className="copyright">Copyright 2022. Comic Closet, LLC. All rights reserved.</div>
		</footer>
	)
}