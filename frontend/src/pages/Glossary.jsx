import React from "react";
import { Link } from "react-router-dom";

function Glossary() {
  return (
    <>
      <div className="page-content">
        <div className="heading">
            <h1> Glossary </h1>
          <p>
            Maori terms translation
          </p>
        </div>

        <table>
            <tr>
              <th>Term</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>Tahi</td>
              <td>One</td>
            </tr>
            <tr>
              <td>Rua</td>
              <td>Two</td>
            </tr>
            <tr>
              <td>Toru</td>
              <td>Three</td>
            </tr>
            <tr>
              <td>TO</td>
              <td>BE</td>
            </tr>
            <tr>
              <td>CONTINUED</td>
              <td>...</td>
            </tr>
          </table>

                  <div className="heading">
            <h1> Glossary </h1>
          <p>
            Python terms
          </p>
        </div>

        <table>
            <tr>
              <th>Term</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>TO</td>
              <td>BE</td>

            </tr>
            <tr>
              <td>CONTINUED</td>
              <td>...</td>
            </tr>
          </table>


        <Link to="/home">
          <button className="btn btn-big">Home</button>
        </Link>
        <Link to="/back">
          <p className="link">Back</p>
        </Link>

      </div>

    </>
  );
}

export default Glossary;
