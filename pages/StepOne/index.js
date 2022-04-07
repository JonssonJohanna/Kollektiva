import Link from "next/link";
import styles from "/styles/StepOne.module.css";

const StepOne = () => {
  return (
    <div className={styles.bodyContainer}>
      <h1 className={styles.h1}>Steg 1</h1>
      <h3 className={styles.breadText}>
        Fyll i information om den bostaden du vill hyra ut
      </h3>
      <div className={styles.parentContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.stepOne}>
            <h3 class={styles.step}>Step 1</h3>
            <p class={styles.stepInfo}>text</p>
          </div>
          <div className={styles.stepOne}>
            <h3 class={styles.step}>Step 2</h3>
            <p class={styles.stepInfo}>text</p>
          </div>
          <div className={styles.stepOne}>
            <h3 class={styles.step}>Step 3</h3>
            <p class={styles.stepInfo}>text</p>
          </div>
          <div className={styles.stepOne}>
            <h3 class={styles.step}>Step 4</h3>
            <p class={styles.stepInfo}>text</p>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.info}>
            <h2 className={styles.title}>Adress</h2>
            <form>
              <div className={styles.inputField}>
                <label>Bostadens adress</label>
                <input type="text" placeholder="Exempelgatan 1" />
              </div>
            </form>
            <form>
              <div className={styles.inputFields}>
                <div className={styles.number}>
                  <label>Postnummer</label>
                  <input type="text" placeholder="421 69" />
                </div>
                <div className={styles.city}>
                  <label>Ort</label>
                  <input type="text" placeholder="Göteborg" />
                </div>
              </div>
            </form>
            {/* <p className={styles.moreInfo}>More info </p> */}
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>Hej</h2>
            <p className={styles.moreInfo}>More info </p>
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>Hej</h2>
            <p className={styles.moreInfo}>More info </p>
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>Hej</h2>
            <form></form>
            <p className={styles.moreInfo}>More info </p>
          </div>
        </div>
      </div>

      <Link href="StepTwo">
        <button>Next step</button>
      </Link>
    </div>
  );
};

export default StepOne;
