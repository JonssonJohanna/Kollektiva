const Footer = () => {
  return (
    <footer>
      <div className="FooterContainer">
        <div className="FooterLogo">
          <img src="/icons/Group.svg" className="iconNavFooter"></img>
          <h4 className="logoText">KOLLEKTIVA</h4>
        </div>
        <div className="contactContainer">
          <div className="FooterContact">
            <p className="FooterContactUs">Kontakta oss</p>
            <div className="TextContainer">
              <div>
                <p className="bold">E-post:</p>
                <p className="thin">exempel@mail.com</p>
              </div>
              <div>
                <p className="bold">Telefon:</p>
                <p className="thin">0703-44 56 78</p>
              </div>
              <div className="adressContainer">
                <p className="bold">Adress: </p>
                <p className="thin">
                  Exempelgatan 22 <br></br>422 22 Exempelborg <br></br>Sverige
                </p>
              </div>
            </div>
          </div>

          <div className="FooterSocial">
            <p className="FooterKollektiva">Följ Kollektiva</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
      <div className="FooterInformation">
        <div className="Policies">
          <p>Villkor</p>
          <p>Säkerhetsregler</p>
          <p>Cookies</p>
        </div>
        <div className="CopyRight">
          <p>© 2022 Kollektiva</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
