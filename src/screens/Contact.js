import React from "react";

function Contact() {
  return (
    <div
      style={{
        backgroundColor: "aliceblue",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form>
        {/* Name input */}
        <div className="form-outline mb-4">
          <input type="text" id="form5Example1" className="form-control" />
          <label className="form-label" htmlFor="form5Example1">
            Name
          </label>
        </div>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email" id="form5Example2" className="form-control" />
          <label className="form-label" htmlFor="form5Example2">
            Email address
          </label>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Contact;
