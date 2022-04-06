import Link from "next/link";
import styles from "/styles/StepOne.module.css";

const StepOne = () => {
  return (
    <div className={styles.bodyContainer}>
      <h1>Titel på sidan</h1>
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
            <h2 className={styles.title}>Hej</h2>
            <p className={styles.moreInfo}>More info </p>
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
