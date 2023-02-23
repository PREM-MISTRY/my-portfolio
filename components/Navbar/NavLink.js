import Link from "next/link";
import styles from "./Navbar.module.css";

export default function NavLink({ label, href, onClick }) {
  return (
    <li
      className="nav-item bg-transparent"
      onClick={onClick ? onClick : () => {}}
    >
      <Link passHref href={href || "/"}>
        <a className={`nav-link tt-uppercase bg-transparent ${styles.link}`}>
          {label || ""}
        </a>
      </Link>
    </li>
  );
}
