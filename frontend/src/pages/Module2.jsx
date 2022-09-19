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
          <h2>Basic Syntax </h2>

<h4>In this lesson, you will learn about python syntax.</h4>

<p>The syntax is the set of rules that define the structure of the Python language.
  <br/> It represents the rules or structure that control the layout of the keywords,
  <br/> symbols, and punctuation of Python programming. </p>

<h3>Python syntax can be executed by writing directly in the Command Line: </h3>
<p>print(”Kia Ora, World!") 
<br/>Kia Ora, World! </p>

<p>Or by creating a python file on the server, using the .py file extension, 
  <br/>and running it in the Command Line:
  <br/>C:\Users\Your Name - python myfile.py </p>
 
<h3>Identifiers </h3> 
<p>Python uses identifiers that identify variables, functions, modules, classes, and other 
<br/>objects in Python. They are case sensitive. Apples and apples are examples of two different identifiers. </p>

<p>The name of an identifier needs to be a letter or underscore (_). The following characters can be
<br/> alphanumeric or underscore.</p>

<p>In addition, you cannot use Python keywords for naming identifiers. </p>

<h3>Keywords</h3>


        </div>
      </div>
    </>
  );
}

export default Module2;
