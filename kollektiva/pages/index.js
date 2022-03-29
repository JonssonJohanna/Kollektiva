import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bo efter dina behov</h1>
      <p className={styles.text}>
        Rubrik här kan man hyra massa fina hus kolla vad bra
      </p>

      <div className={styles.search}>
        <div className={styles.area}>Område: Skriv område eller adress</div>
        <div className={styles.type}>
          Boendetyp
          <div className={styles.searchButton}>Sök bostad</div>
        </div>
      </div>
    </div>
  );
}
