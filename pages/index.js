import Head from "next/head";
import Data from "../components/Data";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>
				Welcome to <a href="https://nextjs.org">Next.js!</a>
			</h1>

			<p className={styles.description}>
				Get started by editing{" "}
				<code className={styles.code}>pages/index.js</code>
			</p>

			<div className={styles.grid}>
				<Data />
				<Link href="/contact">
					<div className={styles.card}>
						<h2>Contact us &rarr;</h2>
						<p>
							Let us know what you think and help us improve your experience.
						</p>
					</div>
				</Link>

				<Link href="/about">
					<div className={styles.card}>
						<h2>About us &rarr;</h2>
						<p>
							Find out more about us and get up to speed! we have all the
							information you need.
						</p>
					</div>
				</Link>

				<a
					href="https://github.com/vercel/next.js/tree/canary/examples"
					className={styles.card}
				>
					<h2>Examples &rarr;</h2>
					<p>Discover and deploy boilerplate example Next.js projects.</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.card}
				>
					<h2>Deploy &rarr;</h2>
					<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
				</a>
			</div>
		</main>
	);
}
