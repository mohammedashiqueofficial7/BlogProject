import React, { useEffect, useState } from "react";
import "../Assets/Styles/AdminDashboard.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, Bell, Users, FileText, CheckCircle, AlertTriangle, Settings, Plus } from "lucide-react";

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
          <header className="admin-header">
            <div className="header-left">
              <h1>Dashboard</h1>
              <input type="search" placeholder="Search..." className="admin-search" />
            </div>
            
            <div className="header-actions">
              {/* Quick Actions */}
              <div className="quick-actions">
                <Link to="/blogsmanaging" className="quick-btn" title="Manage Blogs">
                  <FileText size={18} />
                  <span className="quick-badge">{dashboardData.pendingcount}</span>
                </Link>
                <Link to="/adminuser" className="quick-btn" title="Manage Users">
                  <Users size={18} />
                </Link>
                <Link to="/reports" className="quick-btn" title="View Reports">
                  <Settings size={18} />
                </Link>
              </div>

              {/* Notifications */}
              <div className="dropdown">
                <button
                  className="notification-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Bell size={18} />
                  <span className="notification-badge">{dashboardData.pendingcount + 2}</span>
                </button>
                <div className="dropdown-menu admin-notification-dropdown">
                  <div className="notification-header">
                    <h6>Admin Notifications</h6>
                    <button className="mark-all-read">Mark all read</button>
                  </div>
                  <div className="notification-list">
                    <div className="notification-item unread">
                      <div className="notification-icon pending">
                        <AlertTriangle size={16} />
                      </div>
                      <div className="notification-content">
                        <p>{dashboardData.pendingcount} blogs pending approval</p>
                        <span className="notification-time">Just now</span>
                      </div>
                    </div>
                    <div className="notification-item unread">
                      <div className="notification-icon success">
                        <CheckCircle size={16} />
                      </div>
                      <div className="notification-content">
                        <p>New user registered: john@example.com</p>
                        <span className="notification-time">5 minutes ago</span>
                      </div>
                    </div>
                    <div className="notification-item">
                      <div className="notification-icon info">
                        <FileText size={16} />
                      </div>
                      <div className="notification-content">
                        <p>Blog "React Tips" was published</p>
                        <span className="notification-time">1 hour ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="notification-footer">
                    <Link to="/admin-notifications" className="view-all-link">View all notifications</Link>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <hr />

          <section class="overview overview-admin">
            <h2>Overview</h2>
            <p>Welcome to the Admin Dashboard. Here you can manage users, blogs, reports, and reviews. Monitor key metrics and take necessary actions to maintain the platform.</p>
          </section>

          <section class="cards">
            <div class="card card-users">
              <h3>Users</h3>
              <p>{dashboardData.usercount}</p>
            </div>
            <div class="card card-total">
              <h3>Total Blogs</h3>
              <p>{dashboardData.blogcount}</p>
            </div>
            <div class="card card-verified">
              <h3>Verified Blogs</h3>
              <p>{dashboardData.verifiedcount}</p>
            </div>
            <div class="card card-pending">
              <h3>Pending Blogs</h3>
              <p>{dashboardData.pendingcount} </p>
            </div>
            <div class="card card-deleted">
              <h3>Deleted Blogs</h3>
              <p>{dashboardData.deletingcount} </p>
            </div>
            <div class="card card-reviews">
              <h3>Reviews</h3>
              <p>{dashboardData.ratingcount}</p>
            </div>
          </section>

          <section class="alerts-section">
            <h2>System Alerts</h2>
            <div class="alerts-container">
              <div class="alert-card warning">
                <div class="alert-icon">⚠️</div>
                <div class="alert-content">
                  <h4>Pending Blog Reviews</h4>
                  <p>{dashboardData.pendingcount} blogs awaiting approval</p>
                </div>
              </div>
              <div class="alert-card info">
                <div class="alert-icon">ℹ️</div>
                <div class="alert-content">
                  <h4>System Status</h4>
                  <p>All systems operational</p>
                </div>
              </div>
              <div class="alert-card success">
                <div class="alert-icon">✅</div>
                <div class="alert-content">
                  <h4>Recent Activity</h4>
                  <p>{dashboardData.verifiedcount} blogs verified this week</p>
                </div>
              </div>
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
