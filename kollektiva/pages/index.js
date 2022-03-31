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
        <form className={styles.formContainer}>
          <label className={styles.area}>Område: </label>
          <input
            type="text"
            placeholder="Skriv område eller adress"
            className={styles.inputText}
          />

          <label className={styles.type}>
            <div className={styles.typeContainer}>
              Boendetyp
              <select className={styles.select}>
                <option value="Lägenhet"></option>
                <option value="Lägenhet">Lägenhet</option>
                <option value="Ville">Villa</option>
                <option value="Radhus">Radhus</option>
              </select>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.searchButton}>Sök bostad</button>
            </div>
          </label>
        </form>
      </div>
      <div className={styles.advancedSearch}>Avancerad sökning</div>
      <div className={styles.selectContainer}>
        <button className={styles.findContainer}>
          <h1 className={styles.select}>Hitta bostad</h1>
          <Image src="/Group.svg" width={51} height={47} />
        </button>
        <Link href="/landlord">
          <button className={styles.rentContainer}>
            <h1 className={styles.select}>Bli hyresvärd</h1>
            <Image src="/Key.svg" width={47} height={47} />
          </button>
        </Link>
      </div>

      <div className={styles.informationContainer}>
        <div className={styles.informationText}>
          <h3>Bor du i ett stort hus? Info</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            quam aliquam ornare natoque sed nulla. Mi, porttitor et odio
            maecenas quam pellentesque ultrices maecenas nulla. Vitae id ut amet
            molestie nunc. Dui vel, augue risus, cursus auctor. Quam aliquam
            ornare natoque sed nulla. Mi, porttitor et odio maecenas quam
            pellentesque ultrices maecenas nulla. Vitae id ut amet molestie
            nunc. Dui vel, augue risus, cursus auctor. Quam aliquam ornare
            natoque sed nulla. Mi, porttitor et odio maecenas quam pellentesque
            ultrices maecenas nulla. Vitae id ut amet molestie nunc. Dui vel,
            augue risus, cursus auctor.
          </p>
        </div>
        <div className={styles.informationImg}>
          <Image src="/images/kiddo.png" width={682} height={507} />
        </div>
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.informationImg}>
          <Image src="/images/couple.png" width={682} height={507} />
        </div>
        <div className={styles.informationText}>
          <h1>Text om miljö</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            quam aliquam ornare natoque sed nulla. Mi, porttitor et odio
            maecenas quam pellentesque ultrices maecenas nulla. Vitae id ut amet
            molestie nunc. Dui vel, augue risus, cursus auctor. Quam aliquam
            ornare natoque sed nulla. Mi, porttitor et odio maecenas quam
            pellentesque ultrices maecenas nulla. Vitae id ut amet molestie
            nunc. Dui vel, augue risus, cursus auctor. Quam aliquam ornare
            natoque sed nulla. Mi, porttitor et odio maecenas quam pellentesque
            ultrices maecenas nulla. Vitae id ut amet molestie nunc. Dui vel,
            augue risus, cursus auctor.
          </p>
        </div>
      </div>

      <div className={styles.quotesTitle}>
        <h1>Rubrik quotes</h1>
      </div>
      <div className={styles.quotesContainer}>
        <div className={styles.quoteImg}>
          <Image src="/images/man.png" width={276} height={276} />
          <h1>Namn Namnsson</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            quam aliquam ornare natoque sed nulla. Mi, porttitor et odio
            maecenas quam pellentesque ultrices maecenas nulla.
          </p>
        </div>
        <div className={styles.quoteImg}>
          <Image src="/images/man.png" width={276} height={276} />
          <h1>Namn Namnsson</h1>
          <p className={styles.textContainer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            quam aliquam ornare natoque sed nulla. Mi, porttitor et odio
            maecenas quam pellentesque ultrices maecenas nulla.
          </p>
        </div>
        <div className={styles.quoteImg}>
          <Image src="/images/man.png" width={276} height={276} />
          <h1>Namn Namnsson</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            quam aliquam ornare natoque sed nulla. Mi, porttitor et odio
            maecenas quam pellentesque ultrices maecenas nulla.
          </p>
        </div>
      </div>
    </div>
  );
}
