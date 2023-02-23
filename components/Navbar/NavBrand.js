import Link from "next/link";
import styles from "./Navbar.module.css";

export default function NavbarBrand() {
  return (
    <Link passHref href="/">
      <a className={`navbar-brand tt-uppercase bg-transparent ${styles.brand}`}>
        prem<span className="bg-transparent">mistry</span>
      </a>
    </Link>
  );
}
