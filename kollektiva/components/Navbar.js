import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="homeIcon">
        <h1>Logga</h1>
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
