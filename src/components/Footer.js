import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fa-sharp fa-solid fa-school" /> Siddhartha
                  School & College
                </h6>
                <p>
                  We are comitted to reaching academic excellence through
                  quality education.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Social Sites</h6>
                <p>
                  <Link
                    to="https://www.facebook.com/"
                    target="new"
                    className="text-reset"
                  >
                    <i className="fab fa-facebook-f" /> Facebook
                  </Link>
                </p>
                <p>
                  <Link
                    to="https://www.instagram.com/"
                    target="new"
                    className="text-reset"
                  >
                    <i className="fab fa-instagram" /> Instagram
                  </Link>
                </p>
                <p>
                  <Link
                    to="https://twitter.com/"
                    target="new"
                    className="text-reset"
                  >
                    <i className="fab fa-twitter" /> Twitter
                  </Link>
                </p>
                <p>
                  <Link
                    to="https://www.tiktok.com/en/"
                    target="new"
                    className="text-reset"
                  >
                    <i className="fab fa-tiktok" /> TikTok
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> Birgunj, Nepal
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  gmail@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright: Siddhartha School & College
        </div>
      </footer>
    </>
  );
}

export default Footer;
