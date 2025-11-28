import { Link, Outlet } from "react-router-dom";
import img from "../Assets/Images/mainlogo.png";
import "../Assets/Styles/UserHomepage.css";
import "../Assets/Styles/Layout.css";
import {
  Crown,
  House,
  MessageSquareText,
  Upload,
  Info,
  CircleUserRound,
  LogOut,
  Settings,
  Phone,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";
import Footer from "./Footer";
import { useState } from "react";

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="layout-wrapper">
      <nav className="modern-navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/userHomepage" className="navbar-brand">
            <img src={img} alt="Blog Platform" className="navbar-logo" />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="navbar-links desktop-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/userHomepage" className="nav-link">
                  <House size={18} />
                  <span>Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="nav-link dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Info size={18} />
                    <span>About Us</span>
                  </button>
                  <ul className="dropdown-menu modern-dropdown">
                    <li>
                      <Link to="/about" className="dropdown-item">
                        <Info size={16} />
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/contactus" className="dropdown-item">
                        <Phone size={16} />
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
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
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
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
              </li>

              <li className="nav-item premium-nav">
                <Link to="/proupgarde" className="nav-link premium-link">
                  <Crown size={18} />
                  <span>Premium</span>
                </Link>
              </li>

              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="nav-link dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <LogIn size={18} />
                    <span>logIn</span>
                  </button>
                  <ul className="dropdown-menu modern-dropdown">
                    <li>
                      <Link to="/userlogin" className="dropdown-item">
                        <LogIn size={16} />
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link to="/reg" className="dropdown-item">
                        <UserPlus size={16} />
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="mobile-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/userHomepage" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    <House size={18} />
                    <span>Home</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="nav-link dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Info size={18} />
                      <span>About Us</span>
                    </button>
                    <ul className="dropdown-menu modern-dropdown">
                      <li>
                        <Link to="/about" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                          <Info size={16} />
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/contactus" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                          <Phone size={16} />
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <Link to="/upload" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    <Upload size={18} />
                    <span>Create</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/ai" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    <MessageSquareText size={18} />
                    <span>AI Chat</span>
                  </Link>
                </li>

                <li className="nav-item">
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
                        <Link to="/profile" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                          <CircleUserRound size={16} />
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/settings" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                          <Settings size={16} />
                          Settings
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#logoutModal"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item premium-nav">
                  <Link to="/proupgarde" className="nav-link premium-link" onClick={() => setMobileMenuOpen(false)}>
                    <Crown size={18} />
                    <span>Premium</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="nav-link dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <LogIn size={18} />
                      <span>logIn</span>
                    </button>
                    <ul className="dropdown-menu modern-dropdown">
                      <li>
                        <Link to="/userlogin" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                          <LogIn size={16} />
                          Sign In
                        </Link>
                      </li>
                      <li>
                        <Link to="/reg" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                          <UserPlus size={16} />
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          )}

          {/* Mobile Toggle */}
          <button
            className="navbar-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
    <div
      className="modal fade"
      id="logoutModal"
      tabIndex="-1"
      aria-labelledby="logoutModalLabel"
      aria-hidden="true"
    >
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
            <p className="mb-0">
              Are you sure you want to logout? You'll need to sign in again to
              access your account.
            </p>
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
