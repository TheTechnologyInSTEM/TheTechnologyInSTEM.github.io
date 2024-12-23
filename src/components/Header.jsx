import React, { useState } from "react";

const Header = (props) => {
  return (
    <nav
      className={"navbar fixed-top navbar-expand-lg bg-white " + props.classes}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          The T in STEM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/community">
                Community Impact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/learnf"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/learn/python">
                    Python
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/learn/java">
                    Java
                  </a>
                </li>
                <li>
                  <a className="dropdown-item disabled" href="/learn/cplusplus">
                    C++
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
