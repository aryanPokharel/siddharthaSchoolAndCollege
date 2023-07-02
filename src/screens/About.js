import React from 'react'

function About() {
  return (
    <div className="container">
      <div
      style={{
        height : "10vh"
      }}
      >

      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="data:image/jpeg;base64,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" className="card-img-top" alt="Vision" />
            <div className="card-body">
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">
                At Siddhartha School and College, our vision is to be a leading educational institution that fosters academic excellence, personal growth, and social responsibility.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.wakely.com/sites/default/files/images/content/Mission_0.png" className="card-img-top" alt="Mission" />
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                Our mission is to provide a holistic education that empowers students to become confident, compassionate, and globally-minded individuals.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.crcs.org/wp-content/uploads/2018/01/Education-Is-More-than-Academic-Excellence.jpg" className="card-img-top" alt="Academic Excellence" />
            <div className="card-body">
              <h5 className="card-title">Academic Excellence</h5>
              <p className="card-text">
                We are committed to academic excellence and offer a comprehensive curriculum that meets international standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/t/18/assets/shutterstock_73172272.jpgv1661851152?v=1661851166" 
        
            className="card-img-top" alt="Holistic Development" />
            <div className="card-body">
              <h5 className="card-title">Holistic Development</h5>
              <p className="card-text">
                We believe in the holistic development of our students and offer a wide range of co-curricular activities to explore their talents.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="https://cgrinternationalschool.edu.in/images/CGR-international-school-computer-lab.jpg" className="card-img-top" alt="Infrastructure and Facilities" />
            <div className="card-body">
              <h5 className="card-title">Infrastructure and Facilities</h5>
              <p className="card-text">
                Siddhartha School and College boasts modern infrastructure and top-notch facilities to support the learning and growth of our students.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.buffalo.edu/content/www/ctsi/cores/community/_jcr_content/par/image.img.447.auto.png/1643818727119.png" className="card-img-top" alt="Community Engagement" />
            <div className="card-body">
              <h5 className="card-title">Community Engagement</h5>
              <p className="card-text">
                We believe in the power of community engagement and collaboration to create a supportive network for our students.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://i.pinimg.com/originals/bc/d7/73/bcd7739780e79315adcd4888ff9f8490.jpg" className="card-img-top" alt="Enrollment and Admission" />
            <div className="card-body">
              <h5 className="card-title">Enrollment and Admission</h5>
              <p className="card-text">
                If you are looking for an exceptional educational experience for your child, we invite you to join the Siddhartha School and College community.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://www.gettingsmart.com/wp-content/uploads/2016/08/Parents-helping-kids-Featured-Image.jpg" className="card-img-top" alt="Community Engagement" />
            <div className="card-body">
              <h5 className="card-title">Parents Engagement</h5>
              <p className="card-text">
                We believe in the power of parents engagement and collaboration to create a supportive network for our students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About