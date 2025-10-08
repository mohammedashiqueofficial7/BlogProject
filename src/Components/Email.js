import React, { useState } from "react";
import "../Assets/Styles/Email.css";
import { CircleCheck } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

function Email() {
  const [email, setemail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `http://localhost:3000/user/changepassword`,
        { email },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((data) => {
        toast.success("Please Check your registered email address");
        alert(data.message);
      });
  };

  return (
    <div className="main">
      <div className="email-main">
        <div className="email-border">
          <h5 className="email-heading">Verify your Email</h5>
          <h6 className="email-entering">Enter Your Email</h6>
          <div class="form-floating mb-3">
            <input
              type="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              class="form-control email-box"
              id="floatingInput"
              placeholder="name@example.com"
            />
          </div>
          <div className="email-button">
            <button
              onClick={handleSubmit}
              className="btn btn-success email-verify-button"
              to="/changepassword"
              style={{ textDecoration: "none" }}
            >
              <CircleCheck />
              Verify my email
            </button>
          </div>
          <div className="email-cancel">
            <Link
              className="cancel-email"
              class="btn btn-secondary"
              to="/settings"
              style={{ textDecoration: "none" }}
            >
              <MoveLeft /> Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
