import React, { useEffect, useState } from "react";
import "../Assets/Styles/Profile.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [profile, setprofile] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
  });
  // const onSubmit = async (data) => {
  //   const token = localStorage.getItem("token")
  //   await axios.post("/api/profile",, {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // if using JWT
  //     }
  //   });
  // };
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setprofile(res.data);
      });
  }, []);

  return (
    <div className="main-card">
      <div className="profile-main-border">
        <div className="profile-header">
          <div className="avatar">
            <span>{profile.fullname ? profile.fullname.charAt(0).toUpperCase() : 'U'}</span>
          </div>
          <h2>{profile.fullname}</h2>
          <p className="profile-role">User</p>
        </div>

        <div className="profile-info">
          <div className="info-item">
            <h4 className="box1">Full Name</h4>
            <p>{profile.fullname}</p>
          </div>
          <div className="info-item">
            <h4 className="box2">Email Address</h4>
            <p>{profile.email}</p>
          </div>
          <div className="info-item">
            <h4 className="box3">Phone Number</h4>
            <p>{profile.phonenumber}</p>
          </div>
        </div>

        <div className="profile-button">
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <button className="button">Edit Profile</button>
          </Link>

          <Link to="/favourites" style={{ textDecoration: "none" }}>
            <button className="button1">Favourites</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;