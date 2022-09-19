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
        <div>
          <h2>Python Statement, Indentation, and Comments</h2>

<h4>In this lesson, you will learn about statements, indentation, and comments.</h4>

<h3>Python Statement</h3>
<p>Statements are the instructions that a python interpreter uses to execute the code. 
<br />There are different types of statements such as an assignment statement, 
<br />if statement, for statement, and while statement. These will be discussed later. </p>

<h3>Example of a statement: </h3>
<p>a = 1 + 2 + 3</p> 

<h3>Multi-Line statement</h3>
<p>In Python, the end of a statement is marked by a newline character. 
<br />We can make a statement extend over multiple lines with the line 
<br />continuation character (\). </p>

<h3>Example of a multi-line statement:</h3>
<p>a = 1 + 2 + 3 + \
<br />    4 + 5 + 6 + \
<br />    7 + 8 + 9 </p>
 
<p>Line continuation is implied inside parentheses ( ), brackets [ ], and braces { }. </p>
<br /> 
<h3>Example of line continuation using parentheses ( ): </h3>
<p>a = (1 + 2 + 3 +
  <br />    4 + 5 + 6 +
  <br />    7 + 8 + 9) </p>
 
<h3>Example of line continuation using brackets [ ]: </h3>
<p>colors = ['red',
<br />       'blue',
<br />    'Green']
<br />  
<br />We can also put multiple statements in a single line using semicolons, as follows:
<br />a = 1; b = 2; c = 3 </p>
 
<h3>Python Indentation</h3>
<p>Indentation is used on code blocks (body of a function, loop, etc) at 
<br />the beginning of each code line and is very important in the Python language. 
<br />Indentation is the space at the beginning of each line of code. 
<br />Most programmers use 4 spaces, but it is your choice, as long as it has at 
<br />least 1 space and is consistent throughout the block. </p>

<h3>Example of indentation: </h3>
<p>for i in range(1,11):
<br />    print(i)
<br />    if i == 5:
<br />        break
<br />Execute code </p>
 
<p>Indentation makes the code easier to read and looks neat and clean. This results in Python
<br /> programs that look similar and consistent.
<br />Indentation can be ignored in line continuation, but it's always a good idea to indent.</p>

<h3>Example of indentation: </h3> 
<p>if True:
<br />    print('Kia Ora’)
<br />    a = 5 </p>
 
<h3>Example of no indentation: </h3> 
<p>if True: print(‘Kia Ora’); a = 5 </p>
 
<p>While they are both valid, the first example is more straightforward.
<br />Incorrect indentation will result in IndentationError. </p>
 
<h3>Python Comments </h3>
<p>Comments explain the code inside a program, similar to in-code documentation. </p>

<h3>Example of commenting: </h3>
<p># call function main 
<br />main() </p>
 
<p>It helps the code be more readable, assists people unfamiliar with the project to understand 
<br />what is going on, and is a refresher to the original programmer, especially if it has been
<br /> some time since the code was written.
<br />Python Interpreter ignores comments.</p>
 
<h3>Example of a comment: </h3> 
<p>#This is a comment
<br />print("Kia Ora, World!") </p>

<p>A comment does not have to be text that explains the code, it can also be used to prevent 
<br />Python from executing code.</p>

<h3>Example of comment: </h3> 
<p> #print("Kia Ora, World!") 
<br />print("Ka Pai, Mate!") </p>
 
<h3>Multi-line comments </h3>
<p>Comments can extend up to multiple lines. The hash(#) symbol is used at the beginning of each line.</p>
<h3>Example of multi-line comment: </h3> 
<p>#This is a comment
<br />#written in
<br />#more than just one line
<br />print("Kia Ora, World!") </p>
</div>
      </div>
    </>
  );
}

export default Module1;
