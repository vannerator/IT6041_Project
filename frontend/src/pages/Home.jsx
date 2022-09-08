import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="page-content">
        <div className="heading">
          <p>
            Kia ora!
            <br />
            Want to learn how to code?
            <br />
            You've come to the right place.
          </p>
        </div>

        <Link to="/register">
          <button className="btn btn-big">Get Started</button>
        </Link>
        <div>{/* promotional content here */}</div>
      </div>
    </>
  );
}

export default Home;
