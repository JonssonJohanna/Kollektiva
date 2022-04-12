import Link from "next/link";
import styles from "../../styles/landlord.module.css";

const landlord = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.container}>
        <div className={styles.left}>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            quam aliquam ornare natoque sed nulla. Mi, porttitor et odio
            maecenas quam pellentesque ultrices maecenas nulla. Vitae id ut amet
            molestie nunc. Dui vel, augue risus, cursus auctor. Quam aliquam
            ornare natoque sed nulla. Mi, porttitor et odio maecenas quam
            pellentesque ultrices maecenas nulla. Vitae id ut amet molestie
            nunc. Dui vel, augue risus, cursus auctor.
          </p>
        </div>

        <div className={styles.secondRight}>
          <h3 className={styles.secondTitle}>Varför Kollektiva?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            quam aliquam ornare natoque sed nulla. Mi, porttitor et odio
            maecenas quam pellentesque ultrices maecenas nulla. Vitae id ut amet
            molestie nunc. Dui vel, augue risus, cursus auctor. Quam aliquam
            ornare natoque sed nulla. Mi, porttitor et odio maecenas quam
            pellentesque ultrices maecenas nulla. Vitae id ut amet molestie
            nunc. Dui vel, augue risus, cursus auctor.
          </p>
        </div>
      </div>

      <div className={styles.howItWorks}>
        <h2 className={styles.about}>Såhär fungerar det</h2>
      </div>

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            quam aliquam ornare natoque sed nulla. Sit quis quam aliquam ornare
            natoque sed nulla.
          </p>
          <Link href="/../StepOne">
            <button className={styles.familyButton}>Skapa en annons</button>
          </Link>
        </div>

        <div className={styles.familySectionImg}>
          <img src="/images/dinner.png" className={styles.familyImg}></img>
        </div>
      </div>
    </div>
  );
};

export default landlord;
