import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Module2() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="page-content">
        <h1>Rua - Loops and Functions</h1>
        <div className="heading">
          <p>
            Watch this space!
            <br /> Content coming soon...
          </p>
        </div>
      </div>
    </>
  );
}

export default Module2;
