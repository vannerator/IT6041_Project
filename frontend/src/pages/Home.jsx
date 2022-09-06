import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  function HandleClick(e) {
    e.preventDefault();
    console.log('You clicked continue.')
    navigate("/courses");
  }

  return (
    <>
      <h1>Home</h1>
      <img className = "HeroPicture" src="../Images/Fern.jpeg" alt="Fern" width="300" height="900"></img>
      <form onClick={HandleClick}>
      <Link to="/courses"><button onClick={HandleClick}>Continue</button></Link>
      </form>
    </>
  );
}

export default Home;
