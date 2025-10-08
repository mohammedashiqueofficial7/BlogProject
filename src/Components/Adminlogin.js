import React from "react";
import "../Assets/Styles/Adminlogin.css";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

function Adminlogin() {
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let Username = event.target.Username.value;
    let password = event.target.password.value;
    console.log();
    axios
      .post("http://localhost:3000/admin/adminlogin", {
        Username,
        password,
      })
      .then((result) => {
        localStorage.setItem("token" , result.data.token)
        console.log(result);
      
        toast.success("Login successfull");
        Navigate("/admindashboard");
      })
      .catch((err) => {
        alert(err?.response?.data?.message||err?.message||"error");
        console.log(err);
      });
    
  };
  return (
    <div className="adminlogin-main">
       <div class="login-wrapper main-adminlogin">
    <div class="login-left">
      <div class="login-message">
        <div class="login-logo"></div>
        <h1>*Hello<br/>Admin!👋</h1>
        <p>Concise, Memorable, and Reflect the power and control the admin has over the blog!</p>
      </div>
    </div>
    <div class="login-right">
      <div class="form-container">
        <h2>Welcome Back!</h2>
        <p> let's start!</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" name="Username" required />
          <input type="password" placeholder="Password" name="password" required />
          <button type="submit" class="btn-login">Login Now</button>
        </form>
      </div>
    </div>
  </div>
    </div>
    
    
  );
}

export default Adminlogin;
