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
      <p className={styles.breadText}>
        Fyll i information om den bostaden du vill hyra ut
      </p>
      <div className={styles.parentContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.stepOne}>
            <h4 className={styles.step}>Steg 1</h4>
            <p className={styles.stepInfo}>Om din bostad</p>
          </div>
          <div className={styles.stepOne}>
            <h4 className={styles.step}>Steg 2</h4>
            <p className={styles.stepInfo}>Bekvämligheter</p>
          </div>
          <div className={styles.stepOne}>
            <h4 className={styles.step}>Steg 3</h4>
            <p className={styles.stepInfo}>Husregler</p>
          </div>
          <div className={styles.active}>
            <h4 className={styles.stepActive}>Steg 4</h4>
            <p className={styles.stepInfo}>Uthyrning</p>
          </div>
        </div>
        {/* step one */}
        <div className={styles.rightContainer}>
          <div className={styles.info}>
            <h2 className={styles.title}>Uthyrningsperiod</h2>
            <h4 className={styles.moreInfo}>Inflyttningsdatum</h4>
            <form className={styles.inputFormDate}>
              <div className={styles.inputField}>
                <label className={styles.titleField}>Datum</label>
                <input
                  className={styles.textField}
                  type="text"
                  placeholder="01"
                />
              </div>
              <div className={styles.inputField}>
                <label className={styles.titleField}>Månad</label>
                <input
                  className={styles.textField}
                  type="text"
                  placeholder="Januari"
                />
              </div>
              <div className={styles.inputField}>
                <label className={styles.titleField}>År</label>
                <input
                  className={styles.textField}
                  type="text"
                  placeholder="2022"
                />
              </div>
            </form>
            <h4 className={styles.moreInfo}>
              Hur länge vill du hyra ut din bostad?
            </h4>
            <form className={styles.radioContainer}>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={true}
                />
                <label>Tillsvidare</label>
              </div>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option2"
                />
                <label>Bestämd tid (ange utflyttningsdatum)</label>
              </div>
            </form>
            <h4 className={styles.moreInfo}>Utflyttningsdatum</h4>
            <form className={styles.inputFormMoveOut}>
              <div className={styles.inputField}>
                <label className={styles.titleField}>Datum</label>
                <input
                  className={styles.textField}
                  type="text"
                  placeholder="01"
                />
              </div>
              <div className={styles.inputField}>
                <label className={styles.titleField}>Månad</label>
                <input
                  className={styles.textField}
                  type="text"
                  placeholder="Januari"
                />
              </div>
              <div className={styles.inputField}>
                <label className={styles.titleField}>År</label>
                <input
                  className={styles.textField}
                  type="text"
                  placeholder="2022"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
