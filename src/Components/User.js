import React from "react";
import "../Assets/Styles/User.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import loginpic from "../Assets/Images/loginpic.jpg"
import { Eye, EyeOff, Mail, Lock, Sparkles } from "lucide-react";

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
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <Sparkles size={32} />
              <h1>Welcome Back</h1>
            </div>
            <p className="login-subtitle">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail size={20} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={20} className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  minLength="8"
                  required
                />
              </div>
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>

          <div className="login-footer">
            <a href="#" className="forgot-link">Forgot your password?</a>
            <p className="signup-prompt">
              Don't have an account?
              <Link to="/reg" className="signup-link"> Sign up here</Link>
            </p>
          </div>
        </div>

        <div className="login-image">
          <img src={loginpic} alt="Login illustration" />
          <div className="image-overlay">
            <h3>Join Our Community</h3>
            <p>Discover amazing stories and connect with writers worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;

