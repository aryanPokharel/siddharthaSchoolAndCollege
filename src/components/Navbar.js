import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img
                src="https://www.pngfind.com/pngs/m/173-1739621_live-streaming-in-education-education-icon-in-circle.png"
                height={15}
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <Tooltip title="contact us">
              <Link className="text-reset me-3" to="/contact">
                <i className="fa-solid fa-message" />
              </Link>
            </Tooltip>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
