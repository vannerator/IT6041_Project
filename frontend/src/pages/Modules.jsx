import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightSquareFill } from "react-icons/bs";

function Modules() {
  return (
    <>
      <div className="page-content">
        <h1>Learning Modules</h1>
        <Link to="/module-1">
          <button className="btn btn-module">
            Tahi - Python Basics &nbsp;&nbsp;&nbsp; <BsArrowRightSquareFill />
          </button>
        </Link>
        <Link to="/module-2">
          <button className="btn btn-module">
            Rua - Second Module &nbsp;&nbsp;&nbsp; <BsArrowRightSquareFill />
          </button>
        </Link>
        <Link to="/module-3">
          <button className="btn btn-module">
            Toru - Third Module &nbsp;&nbsp;&nbsp; <BsArrowRightSquareFill />
          </button>
        </Link>
      </div>
    </>
  );
}

export default Modules;
