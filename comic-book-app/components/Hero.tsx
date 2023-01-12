import React from 'react';
import Image from 'next/image';
import hero_desktop from "../public/hero-photo@2x.png"
import styles from "../styles/Hero.module.css";

export function Hero() {
	return (
		<div>
			<Image
				className={styles.hero_image}
				src={hero_desktop}
				alt="comic hero desktop"
			/>
			<div className={styles.hero_banner}>
				<h1 className={styles.hero_title}>Comic Closet</h1>
			</div>
		</div>
	)
}