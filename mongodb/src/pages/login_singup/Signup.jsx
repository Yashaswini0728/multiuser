import React, { useState } from "react";
// import React from "react";
import { Link } from "react-router-dom";
import sign from "./signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendSign = await fetch(`http://localhost:3000/user/signup`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const responce = await sendSign.json();

      if (sendSign.ok) {
        alert("Registration Successful");
        navigate("/");
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={sign.signcontainer}>
      <div className={sign.container}>
        <h1 className={sign.hello}>signup</h1>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="username"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={onSubmit} type="submit">
            submit
          </button>
        </div>
        <div>
          <p>
            already a member?<Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
