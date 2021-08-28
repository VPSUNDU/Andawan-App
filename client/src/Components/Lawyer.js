
import useForm from "react-hook-form";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { format } from "mysql";
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
        <div>
           <h1>Lawyer View</h1>
           
          
           <ul>
        {native.map(e => (
          <li key={e.id}>
              
            <Link to={`/native/${e.id}`}>Form 1</Link>

          </li>
        ))}
      </ul>
        
           
        </div>
    )
}

export default Lawyer;