import React from "react";
import "../Assets/Styles/Passchange.css";
import { CircleCheck } from "lucide-react";
import { Info } from "lucide-react";
import axios from "axios";

function Passchange() {
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        "http://localhost:3000/user/passwordchange",
        {
          password: e.target.password.value,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )

      .then((res) => {
        alert("Password changed successfully");
      })
      .catch((err) => {
        console.error("Error changing password:", err);
        alert(err?.response?.data?.message || err?.message || "Error");
      });
  };

  return (
    <div>
      <form onSubmit={handlesubmit} className="change-password-head">
        <div className="pass-head">
          <h5 className="heading">Change Your Password</h5>
          <h6 className="new-pass">New Password</h6>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control box2"
              id="floatingPassword"
              placeholder="Password"
            />
          </div>
          <h6 className="re-enter-pass">Re-enter New Password</h6>
          <div className="form-floating">
            <input
              type="password"
              className="form-control box3"
              id="floatingPassword"
              placeholder="Password"
            />
          </div>
          <h6 className="information">
            <Info />
            Password must be maximum of 8 characters
          </h6>
          <div className="change-button">
            <button className="btn btn-success pass-change-button">
              <CircleCheck />
              Change password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Passchange;
