import React from "react";
import "../Assets/Styles/User.css";
import { Link } from "react-router-dom";
import img from "../Assets/Images/pixelcut-export.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import loginpic from "../Assets/Images/loginpic.jpg"
import { Info, InfoIcon } from "lucide-react";

function User() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    console.log();
    axios
      .post("http://localhost:3000/user/signin", {
        email,
        password,
      })
      .then((result) => {
        localStorage.setItem("token" , result.data.token)
        console.log(result);
        
        toast.success("Login successfull");
        navigate("/userHomepage");
      })
      .catch((err) => {
        alert(err?.response?.data?.message||err?.message||"error");
        console.log(err);
        
      });
    
  };

  return (
    <div>
      
    <div className="user-main">
      
    <div className="container1 main-div">
      
      <div className="login-section">
        <h1>Welcome back!</h1>
        <h6 className="subtitle">Please enter your credentials to access your account</h6>

        <form onSubmit={handleSubmit}>
          <label>Email*</label>
          <input type="email" name="email" placeholder="mail@simmmpple.com" required />

          <label>Password*</label>
          <input type="password" name="password" placeholder="Min. 8 characters" minLength="8" required />

          <button type="submit" className="sign-in">Sign In</button>
        </form>

        <div className="options">
            <a href="#">Forgot password?</a>
          </div>

        <p className="register">
          Not registered yet? <Link to="/reg" href="#">Create an Account</Link>
        </p>
      </div>

      <div className="image-section">
        <img src={loginpic} width="600px" alt="Login" />
      </div>
    </div>
    </div>
    </div>
  
  );
}
export default User;

