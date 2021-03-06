import Link from "next/link";
import styles from "/styles/StepTwo.module.css";

const StepTwo = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.pageNavigate}>
        <Link href="/" passHref>
          <a>Hem / </a>
        </Link>
        <Link href="/landlord">
          <a>Hyr ut din bostad / </a>
        </Link>
        <Link href="/StepOne">
          <a>Skapa annons</a>
        </Link>
      </div>
      <h2 className={styles.mainTitle}>Steg 2</h2>
      <p className={styles.breadText}>
        Fyll i information om den bostaden du vill hyra ut
      </p>
      <div className={styles.parentContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.stepOne}>
            <h4 className={styles.step}>Steg 1</h4>
            <p className={styles.stepInfo}>Om din bostad</p>
          </div>
          <div className={styles.active}>
            <h4 className={styles.stepActive}>Steg 2</h4>
            <p className={styles.stepInfo}>Bekvämligheter</p>
          </div>
          <div className={styles.stepOne}>
            <h4 className={styles.step}>Steg 3</h4>
            <p className={styles.stepInfo}>Husregler</p>
          </div>
          <div className={styles.stepOne}>
            <h4 className={styles.step}>Steg 4</h4>
            <p className={styles.stepInfo}>Uthyrning</p>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.info}>
            <h3 className={styles.title}>Bekvämligheter</h3>
            <h4 className={styles.InfoType}>
              Klicka i alla bekvämligheter som finns i din bostad
            </h4>

            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/parking.svg"></img>
              <p>Parkering</p>
            </button>
            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/wifi.svg"></img>
              <p>Wi-fi</p>
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

            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/dryer.svg"></img>
              <p>Torktumlare</p>
            </button>
            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/washer.svg"></img>
              <p>Tvättmaskin</p>
            </button>
            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/sauna.svg"></img>
              <p>Bastu</p>
            </button>
            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/fire.svg"></img>
              <p>Öppen spis</p>
            </button>
            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/gym.svg"></img>
              <p>Gym</p>
            </button>
            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/garage.svg"></img>
              <p>Garage</p>
            </button>
            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/tent.svg"></img>
              <p>Uteplats</p>
            </button>
            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/bbq.svg"></img>
              <p>Grill</p>
            </button>
            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/alarm.svg"></img>
              <p>Brandvarnare</p>
            </button>
            <button className={styles.amentiesItem}>
              <img src="/icons/amenities/storage.svg"></img>
              <p>Förråd</p>
            </button>
          </div>
          <div className={styles.save}>
            <button className={styles.buttons}>Spara utkast</button>
            <Link href="StepThree">
              <button className={styles.buttons}>Nästa</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
