import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/auth/authSlice";

function Module1({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    dispatch(updateUser(user._id));
  }, []);

  return (
    <>
      <div className="page-content">
        <h1>Tahi - Python Basics</h1>
        <div>module content here</div>
      </div>
    </>
  );
}

export default Module1;
