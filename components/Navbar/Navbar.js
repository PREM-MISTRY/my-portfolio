import NavbarBrand from "./NavBrand";
import NavLink from "./NavLink";
import { useState } from "react";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpened] = useState(false);

  const openDrawer = () => {
    setOpened(() => true);
  };

  const closeDrawer = () => {
    document.getElementsByClassName("btn-close")[0].click();
    setOpened(() => false);
  };

  return (
    <nav className={`navbar navbar-expand-md fixed-top ${styles.navbar}`}>
      <div className={`container-fluid bg-transparent ${styles.navbarInner}`}>
        <NavbarBrand />
        <button
          className="navbar-toggler navbar-dark bg-transparent"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          onClick={openDrawer}
        >
          <span className="navbar-toggler-icon bg-transparent"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end bg-dark`}
          style={{
            backgroundColor: `rgba(var(--bs-dark-rgb),${
              open ? "var(--bs-bg-opacity)" : "0"
            })!important`,
          }}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div
            className={`offcanvas-header${
              open ? " bg-dark pt-5 pe-4" : " bg-transparent"
            }`}
          >
            <NavbarBrand />
            <button
              type="button"
              className="btn-close text-reset btn-close-white bg-transparent"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={closeDrawer}
            ></button>
          </div>
          <div
            className={`offcanvas-body${
              open ? " bg-dark min-vh-100" : " bg-transparent"
            }`}
          >
            <ul
              className={`navbar-nav justify-content-end flex-grow-1 pe-3${
                open ? " bg-dark" : " bg-transparent"
              }`}
            >
              <NavLink onClick={closeDrawer} label="about me" href="/#about" />
              <NavLink onClick={closeDrawer} label="skills" href="/#skills" />
              <NavLink
                onClick={closeDrawer}
                label="projects"
                href="/#projects"
              />
              <NavLink
                onClick={closeDrawer}
                label="past work"
                href="/#past-work"
              />
              <NavLink onClick={closeDrawer} label="contact" href="/#contact" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
