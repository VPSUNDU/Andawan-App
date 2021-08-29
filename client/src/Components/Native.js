import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button"

function Native() {
  // let { id } = useParams();
  let [input, setInput] = useState({});
  let [native, setNative] = useState([]);
  let [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    fetch("/natives")
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
    setSubmitted(true);
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
    <div className="form-container">
      <h1>Native View</h1>
      <form onSubmit={e => handleSubmit(e)}>
        {submitted ? <div class="success-message">Your form is successfully submitted. You'll be contacted within 7 days</div> : null}

        <label>Fullname:</label>
        <input type="text" placeholder="Please enter your Fullname" name="name" onChange={(e) => handleChange(e)} />
        <br></br>

        <label>Location: </label>
        <input type="text" placeholder="Please enter your Location" name="location" onChange={(e) => handleChange(e)} />

        <br></br>
        <label>Contact Number: </label>
        <input type="text" placeholder="Please enter your Phone details" name="contact" onChange={(e) => handleChange(e)} />

        <br></br>
        <label>Question 1: What legal issues are you or your community facing? </label>
        <br></br>

        <textarea placeholder="Please give as much information as you can in order for Lawyer/Expert to help you better" name="question" onChange={(e) => handleChange(e)}>
        </textarea>

        <br></br>

        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Native;