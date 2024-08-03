import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid pt-4 pb-2">
      <div className="row mx-5">
        <div className="col px-2">
          <h1 className="fw-bold">The T in STEM</h1>
          <p>
            <a className="link-primary" href="/contact">
              Contact Us
            </a>
            <br />
            <small class="text-secondary-emphasis">© 2024 The T in STEM</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
