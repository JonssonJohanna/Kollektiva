import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="homeIcon">
        <Link href="/" passHref>
          <img src="/icons/Group.svg" className="iconNav"></img>
        </Link>
      </div>

      <img src="/icons/hamburgerMenu.svg" className="burgerMenu"></img>

      <Link href="/forRent">
        <a>Hitta bostad</a>
      </Link>
      <Link href="/Landlord/landlord">
        <a>Hyr ut din bostad</a>
      </Link>
      <Link href="/about">
        <a>Om oss</a>
      </Link>
      <div className="loginContainer">
        <Link href="#">
          <a>Logga in</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
