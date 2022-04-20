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
        Välkommen till Kollektiva, framtidens plattform för uthyrning av hus.
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
          <img src="/icons/home.svg" className={styles.icon}></img>
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
          <h3 className={styles.imgTitle}>Välkommen till Kollektiva</h3>
          <p className={styles.imgText}>
            Idag har äldre svårt att hitta boende som passar den livsstil de är
            i behov av. Många bor för stort, men det är i dag många gånger
            dyrare att flytta till en mindre lägenhet och köerna till
            servicehem, där man kan ha egen mindre lägenhet i ett
            bostadskomplex, är långa.{" "}
          </p>
          <p className={styles.imgText}>
            Kollektiva är en plattform där du kan skapa och hantera uthyrningar.
            Men också en plattform där du kan hitta inneboende. Det ska alltså
            gå att hyra ut det egna boendet i andra hand om du som ägare vill
            fortsätta att äga bostaden. Vi betalar en fast summa till den som
            äger bostaden per kvartal och hanterar uthyrningen.
          </p>
        </div>
        <div className={styles.informationImg}>
          <img src="/images/house.png" className={styles.environment}></img>
        </div>
      </div>

      <div className={styles.informationContainer}>
        <div className={styles.informationText}>
          <h3 className={styles.imgTitle}>En hållbar bostadsmarknad</h3>
          <p className={styles.imgText}>
            FN:s globala mål pratar om att över hälften av världens befolkning
            bor i urbana områden, och andelen väntas stiga till 70 procent år
            2050. Växande städer kan skapa nya möjligheter för ekonomisk
            tillväxt, men kan också bidra till ökade sociala klyftor och
            påfrestningar på ekosystem. Den snabba och stora inflyttningen till
            städer ställer nya krav som behöver bemötas på ett ekologiskt,
            ekonomiskt och socialt hållbart sätt.{" "}
          </p>

          <p className={styles.imgText}>
            Samtidigt är det bostadsbrist för familjer och yngre.
            Bostadsmarknaden har under de senare decennierna underminerats och
            rörligheten för den som inte har stort kapital är minimal. Det vill
            vi ändra på!
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
