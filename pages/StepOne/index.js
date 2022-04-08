import Link from "next/link";
import styles from "/styles/StepOne.module.css";

const StepOne = () => {
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

      <h2 className={styles.mainTitle}>Steg 1</h2>
      <p className={styles.breadText}>
        Fyll i information om den bostaden du vill hyra ut
      </p>
      <div className={styles.parentContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.active}>
            <h4 className={styles.stepActive}>Steg 1</h4>
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
          <div className={styles.stepOne}>
            <h4 className={styles.step}>Steg 4</h4>
            <p className={styles.stepInfo}>Uthyrning</p>
          </div>
        </div>
        {/* step one */}
        <div className={styles.rightContainer}>
          <div className={styles.info}>
            <h2 className={styles.title}>Adress</h2>
            <form>
              <div className={styles.inputField}>
                <label className={styles.adress}>Bostadens adress</label>
                <input
                  className={styles.adressField}
                  type="text"
                  placeholder="Exempelgatan 1"
                />
              </div>
            </form>
            <form>
              <div className={styles.inputFields}>
                <div className={styles.number}>
                  <label className={styles.inputName}>Postnummer</label>
                  <input
                    className={styles.adressField}
                    type="text"
                    placeholder="421 69"
                  />
                </div>
                <div className={styles.city}>
                  <label className={styles.inputName}>Ort</label>
                  <input
                    className={styles.cityField}
                    type="text"
                    placeholder="Göteborg"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* step two */}
          <div className={styles.info}>
            <h2 className={styles.title}>Typ av bostad</h2>
            <h4 className={styles.moreInfo}>Vilken typ av bostad hyr du ut?</h4>
            <form className={styles.radioContainer}>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={true}
                />
                <label>Hel bostad</label>
              </div>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option2"
                />
                <label>Våning i bostad</label>
              </div>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option3"
                />
                <label>Rum i bostad</label>
              </div>
            </form>
            <h4 className={styles.moreInfo}>
              Hur många rum finns det i bostaden/hyra ut?
            </h4>
            <div className={styles.counterContainer}>
              <button className={styles.minus}>-</button>
              <div className={styles.counterText}>1 rum</div>
              <button className={styles.plus}>+</button>
            </div>
            <form>
              <div className={styles.inputField}>
                <label className={styles.adress}>Hur många kvadratmeter?</label>
                <input
                  className={styles.metresField}
                  type="text"
                  placeholder="52 m²"
                />
              </div>
            </form>
          </div>
          {/* Step three */}
          <div className={styles.info}>
            <h2 className={styles.title}>Möbler</h2>
            <h4 className={styles.moreInfo}>
              Kommer bostaden hyras ut möblerad?
            </h4>
            <form className={styles.furnitureContainer}>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={true}
                />
                <label>Ja</label>
              </div>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option2"
                />
                <label>Nej</label>
              </div>
            </form>
          </div>
          {/* step four */}
          <div className={styles.info}>
            <h2 className={styles.title}>Badrum</h2>
            <h4 className={styles.moreInfo}>Tillgång till badrum?</h4>
            <form className={styles.furnitureContainer}>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={true}
                />
                <label>Ja</label>
              </div>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option2"
                />
                <label>Nej</label>
              </div>
            </form>
            <h4 className={styles.moreInfo}>
              Hur många badrum finns det i bostaden?
            </h4>
            <div className={styles.counterContainer}>
              <button className={styles.minus}>-</button>
              <div className={styles.counterText}>1 badrum</div>
              <button className={styles.plus}>+</button>
            </div>
          </div>
          {/* Step five */}
          <div className={styles.info}>
            <h2 className={styles.title}>Driftkostnader</h2>
            <h4 className={styles.moreInfo}>Vem betalar elkostnader?</h4>
            <form className={styles.furnitureContainer}>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={true}
                />
                <label>Du som hyresvärd</label>
              </div>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option2"
                />
                <label>Hyresgästen</label>
              </div>
            </form>
            <h4 className={styles.moreInfo}>Vem betalar vattenkostnader?</h4>
            <form className={styles.furnitureContainer}>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option1"
                  checked={true}
                />
                <label>Du som hyresvärd</label>
              </div>
              <div className={styles.radioButtons}>
                <input
                  className={styles.checked}
                  type="radio"
                  value="option2"
                />
                <label>Hyresgästen</label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.save}>
        <button className={styles.buttons}>Spara utkast</button>
        <Link href="StepTwo">
          <button className={styles.buttons}>Nästa</button>
        </Link>
      </div>
    </div>
  );
};

export default StepOne;
