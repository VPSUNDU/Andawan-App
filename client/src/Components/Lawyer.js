
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


function Lawyer() {

  let [native, setNative] = useState([]);

  useEffect(() => {

    fetch("/natives")
      .then(res => res.json())
      .then(json => {
        setNative(json);
        console.log(json);
        console.log("alert")
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  return (
    <body className="lawyerBody">
      <div>
        <h4>For Lawyers/Experts: Please click Accept Button if you wish to answer the question in the Form</h4>
        <ul>
          {native.map(e => (
            <li key={e.id}>
              <Link to={`/native/${e.id}`}>Form</Link>
            </li>
          ))}
        </ul>
      </div>
    </body>
  )
}

export default Lawyer;