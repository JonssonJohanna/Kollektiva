const Footer = () => {
  return (
    <footer>
      <div className="FooterContainer">
        <div className="FooterLogo">
          <img src="/Group.svg"></img>
        </div>
        <div className="FooterContact">
          <p className="FooterContactUs">Kontakta oss</p>
          <div className="ContactRow">
            <p className="bold">E-post:</p>
            <p className="thin">exempel@mail.com</p>
          </div>
          <div className="ContactRow">
            <p className="bold">Telefon:</p>
            <p className="thin">0703-44 56 78</p>
          </div>
          <div className="ContactRow">
            <p className="bold">Adress: </p>
            <p className="thin">Exempelgatan 2</p>
          </div>
        </div>
        <div className="FooterSocial">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
