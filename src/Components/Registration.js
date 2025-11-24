import React from "react";
import "../Assets/Styles/Registration.css";
import { Link, useNavigate } from "react-router-dom";
import Newreg from "../Assets/Images/newregistrations.jpg";
import axios from "axios";
import { toast } from "sonner";
import { UserPlus, Mail, Lock, Phone, User } from "lucide-react";

function Registration() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let fullname = event.target.fullname.value;
    let email = event.target.email.value;
    let phonenumber = event.target.phonenumber.value;
    let password = event.target.password.value;
    console.log();
    axios
      .post("http://localhost:3000/user/register", {
        fullname,
        email,
        phonenumber,
        password,
      })
      .then((result) => {
        localStorage.setItem("token", result.data.token);

        toast("Register Successfully");
        navigate("/userHomepage");
      })
      .catch((err) => {
        alert("error " + err?.message);
      });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          <div className="register-header">
            <div className="register-logo">
              <UserPlus size={32} />
              <h1>Join Our Community</h1>
            </div>
            <p className="register-subtitle">Create your account and start your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <User size={20} className="input-icon" />
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

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
              <label>Phone Number</label>
              <div className="input-wrapper">
                <Phone size={20} className="input-icon" />
                <input
                  type="tel"
                  name="phonenumber"
                  placeholder="Enter your phone number"
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
                  placeholder="Create a strong password"
                  minLength="8"
                  required
                />
              </div>
            </div>

            <button type="submit" className="register-btn">
              Create Account
            </button>
          </form>

          <div className="register-footer">
            <p className="login-prompt">
              Already have an account?
              <Link to="/userlogin" className="login-link"> Sign in here</Link>
            </p>
          </div>
        </div>

        <div className="register-image">
          <img src={Newreg} alt="Registration illustration" />
          <div className="image-overlay">
            <h3>Start Your Journey</h3>
            <p>Share your stories and connect with fellow writers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
