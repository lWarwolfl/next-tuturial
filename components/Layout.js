import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
            </Head>
            
            {children}
            <Footer />
		</div>
	);
};

export default Layout;
