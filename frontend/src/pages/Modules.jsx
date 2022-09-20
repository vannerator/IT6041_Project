import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Modules() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  var module2Unlocked = false;
  var module3Unlocked = false;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      console.log(user.progress);
    }
  }, [user, navigate]);

  if (user.progress === 1) {
    module2Unlocked = true;
  }
  if (user.progress === 2) {
    module2Unlocked = true;
    module3Unlocked = true;
  }

  return (
    <>
      <div className="page-content">
        <h1>Learning Modules</h1>
        <Link to="/module1">
          <button className="btn btn-unlocked">
            Tahi - Python Basics &nbsp;&nbsp;&nbsp; <BsArrowRightSquareFill />
          </button>
        </Link>
        <Link
          style={module2Unlocked ? null : { pointerEvents: "none" }}
          to="/module2"
        >
          <button
            className={module2Unlocked ? "btn btn-unlocked" : "btn btn-locked"}
          >
            Rua - Python Syntax &nbsp;&nbsp;&nbsp;
            <BsArrowRightSquareFill />
          </button>
        </Link>
        <Link
          style={module3Unlocked ? null : { pointerEvents: "none" }}
          to="/module3"
        >
          <button
            className={module3Unlocked ? "btn btn-unlocked" : "btn btn-locked"}
          >
            Toru - Classes &amp; Objects &nbsp;&nbsp;&nbsp;{" "}
            <BsArrowRightSquareFill />
          </button>
        </Link>
      </div>
    </>
  );
}

export default Modules;
