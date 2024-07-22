import React, { useEffect, useRef } from "react";
import "../css/AnimatedHeader.css";
import ImageCarousel from "./ImageCarousel";

const AnimatedHeader = ({ children }) => {
  const hamburgerMenu = useRef(null);
  const overlay = useRef(null);
  const navItems = useRef([]);

  const navAnimation = (val1, val2) => {
    navItems.current.forEach((nav, i) => {
      nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
    });
  };

  const toggleNav = () => {
    hamburgerMenu.current.classList.toggle("active");
    overlay.current.classList.toggle("overlay-active");

    if (overlay.current.classList.contains("overlay-active")) {
      overlay.current.classList.replace(
        "overlay-slide-left",
        "overlay-slide-right"
      );
      navAnimation("out", "in");
    } else {
      overlay.current.classList.replace(
        "overlay-slide-right",
        "overlay-slide-left"
      );
      navAnimation("in", "out");
    }
  };

  useEffect(() => {
    hamburgerMenu.current.addEventListener("click", toggleNav);
    navItems.current.forEach((nav) => {
      nav.addEventListener("click", toggleNav);
    });

    return () => {
      hamburgerMenu.current.removeEventListener("click", toggleNav);
      navItems.current.forEach((nav) => {
        nav.removeEventListener("click", toggleNav);
      });
    };
  }, []);

  return (
    <>
      <div className="overlay overlay-slide-left" id="overlay" ref={overlay}>
        <nav>
          <ul className="nav-ul">
            <li
              id="nav-1"
              className="slide-out-1 center"
              ref={(el) => (navItems.current[0] = el)}
            >
              <a href="/" className="center">
                Home
              </a>
            </li>
            <li
              id="nav-2"
              className="slide-out-2 center"
              ref={(el) => (navItems.current[1] = el)}
            >
              <a href="about" className="center">
                About Us
              </a>
            </li>
            <li
              id="nav-3"
              className="slide-out-3 center"
              ref={(el) => (navItems.current[2] = el)}
            >
              <a href="learn" className="center">
                Learn
              </a>
            </li>
            <li
              id="nav-4"
              className="slide-out-4 center"
              ref={(el) => (navItems.current[3] = el)}
            >
              <a href="program" className="center">
                Programs
              </a>
            </li>
            <li
              id="nav-5"
              className="slide-out-5 center"
              ref={(el) => (navItems.current[4] = el)}
            >
              <a href="contact" className="center">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="hamburger-menu" id="hamburger-menu" ref={hamburgerMenu}>
        <div className="menu-bar1"></div>
        <div className="menu-bar2"></div>
        <div className="menu-bar3"></div>
      </div>

      <section id="home" className="center">
        {children}
      </section>
    </>
  );
};

export default AnimatedHeader;
