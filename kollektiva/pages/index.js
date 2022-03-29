import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
// import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Startsida</h1>
    </div>
  );
}
