import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const contact = () => {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>
				Contact{" "}
				<Link href="/">
					<span>Us</span>
				</Link>
			</h1>
		</main>
	);
};

export default contact;
