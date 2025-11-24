import React, { useEffect, useState } from "react";
import "../Assets/Styles/AdminDashboard.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

function AdminDashBoard() {
  const [dashboardData, setdashbordData] = useState({
    usercount: 0,
    blogcount: 0,
    verifiedcount: 0,
    pendingcount: 0,
    deletingcount: 0,
    ratingcount: 0,
    
  });
  useEffect(() => {
    axios.get("http://localhost:3000/admin/dashboard").then((result) => {
      setdashbordData(result.data);
    });
  }, []);

  return (
    <div className="main-dashboard">
      <div class="d-flex min-vh-100">
        <aside class="sidebar">
          <h2 className="admin-head">Admin</h2>
          <nav>
            <Link to="/admindashboard">Dashboard</Link>
            <Link to="/adminuser">Users</Link>
            <Link to="/blogsmanaging">Managing Blogs</Link>
            <Link to="/reports">Reports</Link>
            <Link to="/reviews">Reviews</Link>
            {/* <Link to="/comments">Comments</Link> */}
            <hr />
            <Link to="/userHomepage">User Homepage</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/favourites">Favourites</Link>
            <Link to="/about">About</Link>
            <Link to="/Contactus">Contact Us</Link>
          </nav>
          <div>
            <button
              type="button"
              class="btn btn-danger admin-logout-btn"
              data-bs-toggle="modal"
              data-bs-target="#logoutadmin"
            >
              Logout
            </button>
          </div>
        </aside>

        <main class="main-content">
          <header>
            <h1>Dashboard</h1>
            <input type="search" placeholder="Search..." />
          </header>

          <section class="cards">
            <div class="card">
              <h3>Users</h3>
              <p>{dashboardData.usercount}</p>
            </div>
            <div class="card">
              <h3>Total Blogs</h3>
              <p>{dashboardData.blogcount}</p>
            </div>
            <div class="card">
              <h3>Verified Blogs</h3>
              <p>{dashboardData.verifiedcount}</p>
            </div>
            <div class="card">
              <h3>Pending Blogs</h3>
              <p>{dashboardData.pendingcount} </p>
            </div>
            <div class="card">
              <h3>Deleted Blogs</h3>
              <p>{dashboardData.deletingcount} </p>
            </div>
            <div class="card">
              <h3>Reviews</h3>
              <p>{dashboardData.ratingcount}</p>
            </div>  
          </section>
        </main>
        <Logoutadmin />
      </div>
    </div>
  );
}

function Logoutadmin() {
  const navigate = useNavigate();
  function handleclick() {
    localStorage.removeItem("token");
    navigate("/adminlogin");
  }
  return (
    <div class="modal backdrop" id="logoutadmin" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Logout</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>You have been logged out here.thank you for visiting us.</p>
          </div>
          <div class="modal-footer">
            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleclick}
            >
              <LogOut />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
