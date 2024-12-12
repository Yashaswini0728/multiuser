import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
// import { use } from "../../../../Server/Routes/userRoutes";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const Login = await fetch(`http://localhost:3000/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const response = await Login.json();

      if (Login.ok) {
        alert("Login Successful");
        localStorage.setItem("token", response.token);
        navigate("/Home");
      } else {
        alert("login failed");
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className={style.full}>
      <div>
        <h1 className={style.hello}>Login</h1>
        <div>
          <input
            type="email"
            name="email"
            id=""
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={onSubmit}>submit</button>
        </div>
        <div>
          <p>
            dont have an account<Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
