import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="page-container">
        <h2> Kia Ora and nau mai haere mai to Python Coding </h2>
        <h3> Tikanga Waehere means to the method to code and this is what we are here to teach you </h3> 
        <h4> Python is a fun and flexible language to learn. </h4>
        <h4> It is great place to start learning coding, and is used in many industries. </h4>
      </div>

      <div>
        <img className = "promoPicture1" src = "../Images/SyntaxImage.png" alt = "SyntaxImage" width="200" height="300"> </img>
        <img className = "promoPicture2" src = "../Images/PythonBasicsImage.png" alt = "PythonBasicsImage" width="200" height="300"> </img>
        <img className = "promoPicture3" src = "../Images/HelloWorldImage.png" alt = "HelloWorldImage" width="200" height="300"> </img>
      </div>

      <div> 
        <h3> Tikanga Waehere teaches Python in an easy interactive style </h3>
        <h3> Each lesson finishes with a fun quiz to test your new knowledge </h3>
        <h3> Your progress is saved to your account</h3>
      </div>

      <div> //buttons are ment to be alligned horizontally 
        <Link to = "/register"> 
          <button className = "btn btn-big"> Register </button> 
        </Link>

        <Link to = "/login"> 
          <button className = "btn btn-big"> Login </button> 
        </Link>
      
      </div>
    </>
  );
}

export default Home;
