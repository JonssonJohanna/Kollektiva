import Link from "next/link";
import styles from "/styles/StepFour.module.css";

const StepFour = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.pageNavigate}>
        <Link href="/">
          <a>Hem / </a>
        </Link>
        <Link href="/landlord">
          <a>Hyr ut din bostad / </a>
        </Link>
        <Link href="/StepOne">
          <a>Skapa annons</a>
        </Link>
      </div>
      <h2 className={styles.mainTitle}>Steg 4</h2>
    </div>
  );
};

export default StepFour;
