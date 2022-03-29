import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="homeIcon">
        <Image src="/Group.svg" width={60} height={51} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/forRent">
        <a>For rent</a>
      </Link>
      <Link href="/landlord">
        <a>Rent out</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="#">
        <a>Logga in</a>
      </Link>
    </nav>
  );
};

export default Navbar;
