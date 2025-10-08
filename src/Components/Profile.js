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
        <h4 className="box1">Full name</h4> <br />
        <p>{profile.fullname}</p>
        <h4 className="box2">Email address</h4> <br />
        <p>{profile.email}</p>
        <h4 className="box3">phone number</h4> <br />
        <p>{profile.phonenumber}</p>
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