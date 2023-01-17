import React from 'react';
import Image from 'next/image';
import hero_desktop from "../public/hero-photo@2x.png"
import halftone_desktop from "../public/halftone@2x.png"
import styles from "../styles/Hero.module.css";

export function Hero() {
	return (
		<div className={styles.hero_container}>
			<Image
				className={styles.hero_image_desktop}
				src={hero_desktop}
				alt="comic hero desktop"
			/>
			<Image
				className={styles.halftone_image_desktop}
				src={halftone_desktop}
				alt="comic halftone desktop"
			/>
			<div className={styles.hero_banner}>
				<h1 className={styles.hero_title}>Comic Closet</h1>
			</div>
		</div>
	)
}