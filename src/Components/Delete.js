import React from "react";
import "../Assets/Styles/Delete.css";
import { MoveLeft, Trash2 } from "lucide-react";
import { MoveRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Info } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import API_BASE_URL from "../config";

function Delete() {
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .delete(`${API_BASE_URL}/user/delete`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast("Account Deleted Successfully");
        navigate("/userlogin");
        localStorage.removeItem("token");
      });
  };
  return (
    <div>
      <div className="delete-main-div">
        <div className="delete-main">
          <h4 className="delete-head-main">Delete Your Account</h4>

          <h5 className="select-reason">Select a Reason</h5>
          <div className="options">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label class="form-check-label" for="exampleRadios1">
                I dont want to use this account
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label class="form-check-label" for="exampleRadios2">
                I have another account
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
              />
              <label class="form-check-label" for="exampleRadios3">
                Others
              </label>
            </div>
          </div>
          <div>
            <p className="commentbox-head">Anything Else You Want to Add</p>
            <div class="form-floating comment-box">
              <textarea class="form-control" id="floatingTextarea2"></textarea>
              <label for="floatingTextarea2">
                Write something / suggest something for improve
              </label>
            </div>
          </div>
          <p className="quote-delete">
            <Info />
            All the data will be deleted permanently from the server including{" "}
            <br />
            your profile and informations
          </p>

          <div>
            <div className="delete-confirm-button">
              <button
                onClick={handlesubmit}
                className="delete-confirm"
                style={{ textDecoration: "none" }}
              >
                <Trash2 /> Delete Account <MoveRight />
              </button>
            </div>
            <div className="cancel-main">
              <Link
                className="cancel-confirm"
                class="btn btn-success"
                to="/settings"
                style={{ textDecoration: "none" }}
              >
                <MoveLeft /> Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
