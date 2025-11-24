import { Link, Outlet } from "react-router-dom";
import img from "../Assets/Images/mainlogo.png";
import "../Assets/Styles/UserHomepage.css";
import "../Assets/Styles/Layout.css";
import { Crown, House, MessageSquareText, Upload, Info, CircleUserRound, LogOut, Settings } from "lucide-react";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="layout-wrapper">
      <nav className="modern-navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/userHomepage" className="navbar-brand">
            <img src={img} alt="Blog Platform" className="navbar-logo" />
          </Link>

          {/* Navigation Links - Right of Logo */}
          <div className="navbar-links">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/userHomepage" className="nav-link">
                  <House size={18} />
                  <span>Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <Info size={18} />
                  <span>About</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/upload" className="nav-link">
                  <Upload size={18} />
                  <span>Create</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/ai" className="nav-link">
                  <MessageSquareText size={18} />
                  <span>AI Chat</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <CircleUserRound size={18} />
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggle-icon"></span>
            <span className="navbar-toggle-icon"></span>
            <span className="navbar-toggle-icon"></span>
          </button>

          {/* Navigation Content for Mobile */}
          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Right Side Actions */}
            <div className="navbar-actions">
              {/* Profile Dropdown */}
              <div className="dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <CircleUserRound size={18} />
                  <span>Profile</span>
                </button>
                <ul className="dropdown-menu modern-dropdown">
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      <CircleUserRound size={16} />
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="dropdown-item">
                      <Settings size={16} />
                      Settings
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#logoutModal"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>

              {/* Premium Button */}
              <Link to="/proupgarde" className="btn-modern btn-premium">
                <Crown size={16} />
                <span>Premium</span>
              </Link>

              {/* Sign In Button */}
              <Link to="/userlogin" className="btn-modern btn-secondary">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
      <LogoutModal />
    </div>
  );
}

function LogoutModal() {
  return (
    <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modern-modal">
          <div className="modal-header">
            <h5 className="modal-title" id="logoutModalLabel">
              <LogOut size={20} className="me-2" />
              Confirm Logout
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="mb-0">Are you sure you want to logout? You'll need to sign in again to access your account.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn-modern btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn-modern btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/";
              }}
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
