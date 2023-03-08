import Head from "next/head";
import Image from "next/image";
import bLogo from "../../../CustomerAssets/LOGO.png";
import amLogo from "../../../CustomerAssets/AMSOIL_Racing_Logo_on_black.jpg";
import amOgLogo from "../../../CustomerAssets/AMSOIL_Logo_wTag.jpg";
import amFreeLogo from "../../../CustomerAssets/Runs on Freedom Logo-ColorAdjusted.jpg";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Lone Star Garage LLC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <h1>Lone Star Garage LLC</h1>
            <p>Automotive & Industrial Repair</p>
          </div>

          <Image className={styles.amLogo} src={amOgLogo} alt="Logo" priority />
          <Image className={styles.amLogo} src={amLogo} alt="Logo" priority />
          <Image
            className={styles.amLogo}
            src={amFreeLogo}
            alt="Logo"
            priority
          />
        </div>

        <div className={styles.center}></div>

        <div className={styles.card}>
          <Image
            className={styles.logo}
            src={bLogo}
            alt="Logo"
            width={375}
            height={200}
            priority
          />
        </div>
      </main>
    </>
  );
}
