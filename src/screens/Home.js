import { Grid } from "@mui/material";
import React from "react";

import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5" >
      <div className="row">
        <div
          className="col-md-6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 className="mb-4">Welcome to Siddhartha School and College</h1>
          <p>
            Welcome to Siddhartha School and College, a leading educational
            institution located in Birgunj, Nepal. We are dedicated to providing
            quality education and nurturing the intellectual, social, and
            emotional growth of our students.
          </p>
          <Link to="/about">
            <button className="btn btn-primary">Explore More</button>{" "}
          </Link>
        </div>
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500"
            alt="School Building"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <h2>Our Mantras For Academic Excellence</h2>
      <div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              {index == 0 ? (
                <div className="card" id="mantraCard">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                    style={{
                      height: "60%",
                    }}
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Mastery</h5>
                    <p className="card-text">
                      We believe in pushing our students to Mastery in their
                      fields.
                    </p>
                  </div>
                </div>
              ) : index == 1 ? (
                <div className="card" id="mantraCard">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                    style={{
                      height: "60%",
                    }}
                  >
                    <img
                      src="https://media.istockphoto.com/id/1297672426/photo/graduation-cap-and-diploma-concept-on-a-wood-background.jpg?s=170667a&w=0&k=20&c=FHlpHwj5PuIe46MqOvVt_d17DyTVqS3YeSBp5QOjGqg="
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Distinction</h5>
                    <p className="card-text">
                      Our institution recognizes and rewards students who
                      achieve distinction in their academic endeavors.
                    </p>
                  </div>
                </div>
              ) : index == 2 ? (
                <div className="card" id="mantraCard">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                    style={{
                      height: "60%",
                    }}
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Schoolarship</h5>
                    <p className="card-text">
                      We foster a culture of scholarship, encouraging students
                      to engage in rigorous study and research.
                    </p>
                  </div>
                </div>
              ) : index == 3 ? (
                <div className="card" id="mantraCard">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                    style={{
                      height: "60%",
                    }}
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Brilliance</h5>
                    <p className="card-text">
                      Our faculty members nurture and celebrate the brilliance
                      of our students, fostering an environment of intellectual
                      curiosity.
                    </p>
                  </div>
                </div>
              ) : index == 4 ? (
                <div className="card" id="mantraCard">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                    style={{
                      height: "60%",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WQytebVaMzIGVZPdzjIH9edKNa9GCWNYaQ&usqp=CAU"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Achievement</h5>
                    <p className="card-text">
                      At our institution, we celebrate the achievements of our
                      students as they reach new heights in their academic
                      pursuits.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="card" id="mantraCard">
                  <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                    style={{
                      height: "60%",
                    }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZa2Hc79ih0-rZ3htvsgv_jsodkTRoxx_og&usqp=CAU"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Exceptional Performance</h5>
                    <p className="card-text">
                      We strive for excellence and recognize exceptional
                      performance in all aspects of academic life.
                    </p>
                  </div>
                </div>
              )}
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500"
            alt="School Building"
            className="img-fluid rounded"
          />
        </div>
        <div
          className="col-md-6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 className="mb-4">Welcome to Siddhartha School and College</h1>
          <p>
            At Siddhartha School and College, we strive to instill values such
            as integrity, respect, and responsibility in our students. We foster
            a supportive and inclusive community where every student feels
            valued and supported in their educational journey.
          </p>
          <button className="btn btn-primary">Explore More</button>
        </div>
      </div>
      FAQs
      <div
        className="accordion accordion-borderless"
        id="accordionFlushExampleX"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOneX">
            <button
              className="accordion-button"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapseOneX"
              aria-expanded="true"
              aria-controls="flush-collapseOneX"
            >
              How can i reach you out?
            </button>
          </h2>
          <div
            id="flush-collapseOneX"
            className="accordion-collapse collapse show"
            aria-labelledby="flush-headingOneX"
            data-mdb-parent="#accordionFlushExampleX"
          >
            <div className="accordion-body">
              You can reach us out using the contact us form in this website
              itself. Alternative to that, you can always hit us up through our
              social media handles or even visit the school complex.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwoX">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapseTwoX"
              aria-expanded="false"
              aria-controls="flush-collapseTwoX"
            >
              How will my queries be answered?
            </button>
          </h2>
          <div
            id="flush-collapseTwoX"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwoX"
            data-mdb-parent="#accordionFlushExampleX"
          >
            <div className="accordion-body">
              Our marketing team will respond to your queries thorugh the email
              address you provide us. You will be responded through the soical
              media of your choice too if you take that approach to reach us
              out.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThreeX">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapseThreeX"
              aria-expanded="false"
              aria-controls="flush-collapseThreeX"
            >
              How can i know about vacancies and admissions?
            </button>
          </h2>
          <div
            id="flush-collapseThreeX"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThreeX"
            data-mdb-parent="#accordionFlushExampleX"
          >
            <div className="accordion-body">
              We have a practice of pinning notifications about vacancies and
              admissions in our website itself. Other than that, you can always
              subscribe to our newsletter to stay updated about new vacancies
              and admissions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
