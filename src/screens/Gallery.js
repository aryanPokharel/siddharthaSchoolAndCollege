import React from 'react'

function Gallery() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Photo Gallery</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <img
            src="https://via.placeholder.com/500"
            className="img-fluid"
            alt="Gallery Image"
          />
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <img
            src="https://via.placeholder.com/500"
            className="img-fluid"
            alt="Gallery Image"
          />
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <img
            src="https://via.placeholder.com/500"
            className="img-fluid"
            alt="Gallery Image"
          />
        </div>
     
      </div>
    </div>

  )
}

export default Gallery  