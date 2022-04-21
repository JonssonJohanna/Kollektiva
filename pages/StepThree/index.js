import Link from "next/link";
import styles from "/styles/StepThree.module.css";

const StepThree = () => {
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
      <h2 className={styles.mainTitle}>Steg 3</h2>
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
          <div className={styles.active}>
            <h4 className={styles.stepActive}>Steg 3</h4>
            <p className={styles.stepInfo}>Husregler</p>
          </div>
          <div className={styles.stepOne}>
            <h4 className={styles.step}>Steg 4</h4>
            <p className={styles.stepInfo}>Uthyrning</p>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.info}>
            <h3 className={styles.title}>Husregler</h3>
            <h4 className={styles.InfoType}>Är djur tillåtet i din bostad?</h4>
            <div className={styles.radioButtonsContainer}>
              <div className={styles.radioButtonsFirst}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={false}
                />
                <label>Ja</label>
              </div>

              <div className={styles.radioButtonsSecond}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={false}
                />
                <label>Nej</label>
              </div>
            </div>

            <h4 className={styles.InfoType}>
              Är rökning tillåtet i din bostad?
            </h4>
            <div className={styles.radioButtonsContainer}>
              <div className={styles.radioButtonsFirst}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={false}
                />
                <label>Ja</label>
              </div>

              <div className={styles.radioButtonsSecond}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={false}
                />
                <label>Nej</label>
              </div>
            </div>

            <h4 className={styles.InfoType}>
              Är det tillåtet att måla om i din bostad?
            </h4>
            <div className={styles.radioButtonsContainer}>
              <div className={styles.radioButtonsFirst}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={false}
                />
                <label>Ja</label>
              </div>

              <div className={styles.radioButtonsSecond}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={false}
                />
                <label>Nej</label>
              </div>
            </div>

            <h4 className={styles.InfoType}>
              Är det tillåtet att spika upp saker på väggarna i din bostad?
            </h4>
            <div className={styles.radioButtonsContainer}>
              <div className={styles.radioButtonsFirst}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={false}
                />
                <label>Ja</label>
              </div>

              <div className={styles.radioButtonsSecond}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={false}
                />
                <label>Nej</label>
              </div>
            </div>

            <h4 className={styles.InfoType}>
              Max antal personer som får bo i bostaden
            </h4>
            <div className={styles.counterContainer}>
              <button className={styles.minus}>-</button>
              <div className={styles.counterText}>1 personer</div>
              <button className={styles.plus}>+</button>
            </div>
          </div>
          <div className={styles.save}>
            <button className={styles.buttons}>Spara utkast</button>
            <Link href="StepFour">
              <button className={styles.buttons}>Nästa</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
