import React from "react";
import "../Assets/Styles/Registration.css";
import { Link, useNavigate } from "react-router-dom";
import Newreg from "../Assets/Images/newregistrations.jpg";
import axios from "axios";
import { toast } from "sonner";
import { Info } from "lucide-react";

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
    <div>
      
      <div className="container1 main-div">
        <div>
          <div className="container2 reg-main-div">
            <div className="reg-section">
              <h6 className="reg-subtitle">
                <h1>Welcome back!</h1>
                Please enter your credentials to access your account
              </h6>

              <form onSubmit={handleSubmit}>
                <label>Fullname*</label>
                <input
                  type="text"
                  name="fullname"
                  id="floatingInput"
                  placeholder="examplename"
                  required
                />

                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  id="floatingInput"
                  placeholder="mail@simmmpple.com"
                  required
                />

                <label>Phone number*</label>
                <input
                  type="phonenumber"
                  name="phonenumber"
                  id="floatingInput"
                  placeholder="10 digit phone number"
                  required
                />

                <label>Password*</label>
                <input
                  type="password"
                  name="password"
                  id="floatingInput"
                  placeholder="Min. 8 characters"
                  minLength="8"
                  required
                />

                <button type="submit" className="registration-button">
                  Register
                </button>
              </form>

              <div className="reg-options">
                <a href="#">Forgot password?</a>
              </div>

              <p className="reg-acc">
                Already have an account{" "}
                <Link to="/userlogin" href="#">
                  Login here
                </Link>
              </p>
            </div>

            <div className="reg-image-section">
              <img src={Newreg} width="500px" alt="Login" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
