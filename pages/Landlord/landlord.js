import Link from "next/link";
import styles from "../../styles/landlord.module.css";

const landlord = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.pageNavigate}>
            <Link href="/" passHref>
              <a>Hem / </a>
            </Link>
            <Link href="/landlord">
              <a>Hyr ut din bostad </a>
            </Link>
          </div>
          <h1 className={styles.title}>
            Hyr ut din bostad tryggt med Kollektiva
          </h1>
          <Link href="/../StepOne">
            <button className={styles.button}>Skapa en annons</button>
          </Link>
        </div>
        <div className={styles.right}>
          <img src="/images/hands.png" className={styles.hands}></img>
        </div>
      </div>

      <div className={styles.secondContainer}>
        <div className={styles.secondLeft}>
          <h3 className={styles.secondTitle}>
            Anpassa din bostad efter ditt behov
          </h3>
          <p>
            I dag har äldre svårt att hitta boende som passar den livsstil de är
            i behov av. Många bor för stort, men det är i dag många gånger
            dyrare att flytta till en mindre lägenhet och köerna till
            servicehem, där man kan ha egen mindre lägenhet i ett
            bostadskomplex, är långa.{" "}
          </p>
          <p>
            {" "}
            mer aktiva 55+ kan befinna sig i en liknande situation: att ha samma
            kvadratmeter för en eller två personer när barnen sedan länge har
            flyttat ut och rummen står tomma.
          </p>
        </div>

        <div className={styles.secondRight}>
          <h3 className={styles.secondTitle}>Varför Kollektiva?</h3>
          <p>
            Vi vill skapa förutsättningar för fler, bättre och effektivare
            affärer för bostadsmarknadens olika aktörer - med en rörligare och
            mer tillgänglig bostadsmarknad som ledstjärna.
          </p>
          <p>
            {" "}
            Det gör vi genom att bygga de bästa sökverktygen för hyres-gäster
            att hitta sina drömbostäder, förenkla fastighetsägarnas vardag genom
            effektiv marknadsföring och ge hyresvärdarna chans att nå fler
            spekulanter. Helt enkelt göra bostadsmarknaden enklare.
          </p>
        </div>
      </div>

      <h2 className={styles.about}>Såhär fungerar det</h2>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutSection}>
          <img src="/images/empty.png" className={styles.aboutImg}></img>
          <h4 className={styles.aboutTitle}>Skapa en annons</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            quam aliquam ornare natoque sed nulla. Mi, porttitor et odio
            maecenas quam pellentesque ultrices maecenas nulla.{" "}
          </p>
        </div>

        <div className={styles.aboutSection}>
          <img src="/images/keys2.png" className={styles.aboutImg}></img>
          <h4 className={styles.aboutTitle}>Hyr ut din bostad</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            quam aliquam ornare natoque sed nulla. Mi, porttitor et odio
            maecenas quam pellentesque ultrices maecenas nulla.{" "}
          </p>
        </div>

        <div className={styles.aboutSection}>
          <img src="/images/oldCouple.png" className={styles.aboutImg}></img>
          <h4 className={styles.aboutTitle}>Bo efter ditt behov</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            quam aliquam ornare natoque sed nulla. Mi, porttitor et odio
            maecenas quam pellentesque ultrices maecenas nulla.{" "}
          </p>
        </div>
      </div>

      <div className={styles.familySection}>
        <div className={styles.familySectionText}>
          <h4 className={styles.familyTitle}>Skapa boende för nya familjer</h4>
          <p className={styles.familyTxt}>
            Bidra till en bättra bostadsmarknad för de unga i samhället. Då det
            råder bostadsbrist för familjer och yngre. Bostadsmarknaden har
            under de senare decennierna underminerats och rörligheten för den
            som inte har stort kapital är minimal. Det vill vi ändra på!
          </p>
          <Link href="/../StepOne">
            <button className={styles.familyButton}>Skapa en annons</button>
          </Link>
        </div>

        {/* <div className={styles.familySectionImg}> */}
        <img src="/images/dinner.png" className={styles.familyImg}></img>
        {/* </div> */}
      </div>
    </div>
  );
};

export default landlord;
