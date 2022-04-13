import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
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
          <div className={styles.inputSearch}>
            <label className={styles.area}>Område: </label>
            <input
              type="text"
              placeholder="Skriv område eller adress"
              className={styles.inputText}
            />
          </div>

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
          <h4 className={styles.selectButtons}>Hitta bostad</h4>
          <img src="/icons/Group.svg" className={styles.icon}></img>
        </button>
        <Link href="Landlord/landlord">
          <button className={styles.rentContainer}>
            <h4 className={styles.selectButtons}>Bli hyresvärd</h4>
            <img src="/icons/Key.svg" className={styles.icon}></img>
          </button>
        </Link>
      </div>

      <div className={styles.informationContainerRight}>
        <div className={styles.informationText}>
          <h3 className={styles.imgTitle}>Bor du också i ett för stort hus?</h3>
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
          <img src="/images/house.png" className={styles.environment}></img>
        </div>
      </div>

      <div className={styles.informationContainer}>
        <div className={styles.informationText}>
          <h3 className={styles.imgTitle}>Text om miljö</h3>
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
          <img src="/images/key.png" className={styles.environment}></img>
        </div>
      </div>

      <div className={styles.quotesTitle}>
        <h2>Våra kunder</h2>
      </div>
      <div className={styles.quotesContainer}>
        <div className={styles.quoteImg}>
          <img src="/images/lennart.png" className={styles.quotesImg}></img>

          <h4>Åsa & Lennart</h4>
          <p className={styles.textContainer}>
            “Tack vare Kollektiva kunde vi hyra ut vårt stora hus och flytta in
            en lägnhet som ligger mer centralt och mycket närmre våra barn och
            barnbarn”
          </p>
        </div>
        <div className={styles.quoteImg}>
          <img src="/images/helena.png" className={styles.quotesImg}></img>{" "}
          <h4>Mikael & Helena</h4>
          <p className={styles.textContainer}>
            “Otroligt enkel och smidig hemsida. Så smart att kunna hyra ut sitt
            hus och flytta till en lägenhet nu när barnen vuxit upp och flyttat
            ut. Rekomenderar kollektiva starkt!”
          </p>
        </div>
        <div className={styles.quoteImg}>
          <img
            src="/images/jenny.png"
            className={styles.quotesImg}
            alt="man in a cafe"
          ></img>
          <h4>Patrik & Jenny</h4>
          <p className={styles.textContainer}>
            “Vi letade hus i ett år innan vi upptäckte Kollektiva. På bara två
            veckor hade hittade vi ett hus som passade perfekt för vår familj.
            Extra plus för säker uthyrning.”
          </p>
        </div>
      </div>
    </div>
  );
}
