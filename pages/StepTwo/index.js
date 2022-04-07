import Link from "next/link";
import styles from "/styles/StepTwo.module.css";

const StepTwo = () => {
  return (
    <div className={styles.bodyContainer}>
      <h2 className={styles.mainTitle}>Steg 2</h2>
      <p className={styles.breadText}>
        Fyll i information om den bostaden du vill hyra ut
      </p>
      <div className={styles.parentContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.stepOne}>
            <h4 class={styles.step}>Step 1</h4>
            <p class={styles.stepInfo}>text</p>
          </div>
          <div className={styles.active}>
            <h4 class={styles.active}>Step 2</h4>
            <p class={styles.stepInfo}>text</p>
          </div>
          <div className={styles.stepOne}>
            <h4 class={styles.step}>Step 3</h4>
            <p class={styles.stepInfo}>text</p>
          </div>
          <div className={styles.stepOne}>
            <h4 class={styles.step}>Step 4</h4>
            <p class={styles.stepInfo}>text</p>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.info}>
            <h3 className={styles.title}>Bekvämligheter</h3>
            <h4>Klicka i alla bekvämligheter som finns i din bostad</h4>
            <div className={styles.amentiesContainer}>
              <div className={styles.amentiesRow}>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/parking.svg"></img>
                  <p>Parkering</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/wifi.svg"></img>
                  <p>Wifi</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/pool.svg"></img>
                  <p>Pool</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/garden.svg"></img>
                  <p>Trädgård</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/balcony.svg"></img>
                  <p>Balkong</p>
                </button>
              </div>
              <div className={styles.amentiesRow}>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/parking.svg"></img>
                  <p>Parkering</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/wifi.svg"></img>
                  <p>Wifi</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/pool.svg"></img>
                  <p>Pool</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/garden.svg"></img>
                  <p>Trädgård</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/balcony.svg"></img>
                  <p>Balkong</p>
                </button>
              </div>{" "}
              <div className={styles.amentiesRow}>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/parking.svg"></img>
                  <p>Parkering</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/wifi.svg"></img>
                  <p>Wifi</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/pool.svg"></img>
                  <p>Pool</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/garden.svg"></img>
                  <p>Trädgård</p>
                </button>
                <button className={styles.amentiesItem}>
                  <img src="/icons/amenities/balcony.svg"></img>
                  <p>Balkong</p>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.save}>
            <button className={styles.buttons}>Spara utkast</button>
            <button className={styles.buttons}>Nästa</button>
          </div>
        </div>
      </div>

      <Link href="StepThree">
        <button>Next step</button>
      </Link>
    </div>
  );
};

export default StepTwo;
