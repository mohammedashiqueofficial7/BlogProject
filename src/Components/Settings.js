import React, { useEffect, useState } from "react";
import "../Assets/Styles/Settings.css";
import { Link, useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { MoveRight } from "lucide-react";
import { CircleCheck } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

function Settings() {
  
  const navigate = useNavigate()
  const [profile, setprofile] = useState({
      fullname: "",
      email: "",
      phonenumber: "",
      dateofbirth:""
    });
    console.log(profile);
    
    const handlechange=(e)=>{
      setprofile({...profile,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
      e.preventDefault()
       const token = localStorage.getItem("token");
      axios
      .put("http://localhost:3000/user/profile",profile,{
        headers: {Authorization: `Bearer ${token}`}
      })
      .then((res)=>{
        toast.success("Updated Successfully"); 
        navigate("/profile");
      })
    }
    

    useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/user/profile", {
        headers: { Authorization: `Bearer ${token}`},
      })
      .then((res) => {
        setprofile(res.data);
     })
        .catch((err) => {
        alert("error "+err?.message);
      });
  }, []);
  

  return (
    <div>
      <div className="edit-head">Edit Your Profile</div>
      <div className="main">
        <div className="main-border">
          <h5>First Name</h5>
          <input value={profile.fullname} className="box1" type="text" name="fullname" onChange={handlechange}></input>
          <h5>Change Email</h5>
          <input value={profile.email} className="box2" type="email" name="email" onChange={handlechange}></input>
          <h5>Change Number</h5>
          <input  value={profile.phonenumber} className="box3" type="text" name="phonenumber" onChange={handlechange}></input>
          <h5>Date of Birth</h5>
          <input value={profile.dateofbirth} className="calender" type="date" name="dateofbirth" onChange={handlechange}></input>
          <div className="main-save-button">
            <button onClick={handlesubmit} className="btn btn-success save-button">
              <CircleCheck />Save
            </button>
          </div>

          <div className="main-button">
            <Link
              className="delete-button"
              to="/deleteaccount"
              style={{ textDecoration: "none" }}
            >
              <Trash2 /> Delete Account <MoveRight />
            </Link>
          </div>
          

          <div>
            <Link
              className="change-pass"
              to="/Emailverify"
              style={{ textDecoration: "none" }}
            >
              Change Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
