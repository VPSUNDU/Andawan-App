
import useForm from "react-hook-form";
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Native() {
  let { idid } = useParams();
    let [input, setInput] = useState({});
    let [native,setNative] = useState([]);
  
    useEffect(() => {
      fetch(`/natives/${idid}`)
        .then(res => res.json())
        .then(json => {
          setNative(json);
          console.log(json);
        })
        .catch(error => {
        console.log("Network error:", error);
        });
    }, []);
  
    const handleChange = e => {
      console.log(e);
      let newPair = {};
      newPair[e.target.name] = e.target.value;
  
      setInput({ ...input, ...newPair });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      getNative();
    };
    
    const getNative = () => {
        fetch("/natives", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(input)
        })
          .then(response => response.json())
          .then(data => {
            setNative(data);
            console.log(data);
          })
          .catch(err => {
            console.log(err);
          });
      };

      const deleteNative = id => {
        fetch(`/natives/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setNative(data);
          })
          .catch(err => console.log(err));
      };
    

    return (
        <div>
           <h1>Native View</h1>
           <form onSubmit={e => handleSubmit(e)}>
            <label>Fullname:</label>
            <input type="text" placeholder="Please enter your Fullname" name="name" value={native.name} onChange={(e) => handleChange(e)}/> <br></br>
            <label>Location: </label>
            <input  type="text" placeholder="Please enter your Location" name="location" value={native.location} onChange={(e) => handleChange(e)}/><br></br>
            <label>Contact Number: </label>
            <input type="text" placeholder="Please enter your Phone details" name="contact" value={native.contact} onChange={(e) => handleChange(e)}/><br></br>
            <label>Question 1: What legal issues are you or your community facing? </label>
            <br></br>
            <textarea placeholder="Please give as much information as you can in order for Lawyer/Expert to help you better" name ="question" value={native.question} onChange={(e) => handleChange(e)}>
                </textarea>
                <br></br>
            <input type="Submit"/><br></br>
            <br></br>
            <button className="delete" onClick={() => deleteNative(native.id)}>
              Delete 
            </button>
        </form>
        {/* <ul>
        {native.map(e => (
          <li key={e.id}>
            {e.name}{e.location}{e.contact}{e.question}
          </li>
        ))}
      </ul> */}
        </div>
    )
}

export default Native;