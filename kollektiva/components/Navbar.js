import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="homeIcon">
        <img src="/icons/Group.svg" className="iconNav"></img>
      </div>

      <Link href="/forRent">
        <a>Hitta bostad</a>
      </Link>
      <Link href="/landlord">
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
