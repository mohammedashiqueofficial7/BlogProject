import { Link, Outlet } from "react-router-dom";
import img from "../Assets/Images/mainlogo.png";
import "../Assets/Styles/UserHomepage.css";
import "../Assets/Styles/Layout.css";
import { Crown, House, MessageSquareText } from "lucide-react";
import { Upload } from "lucide-react";
import { Wrench } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { LogOut } from "lucide-react";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <div className="main-layout">
        <nav
          class="navbar  nav-color navbar-expand-lg bg-body-tertiary position-fixed sticky-top w-100 "
          id="nav-main1"
        >
          <div class="container-fluid justify-content-around" id="main-nav">
            <a class="navbar-brand" href="#">
              <img
                src={img}
                width="200px"
                height="100px"
                className="user_logo"
              ></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <Link
                      className="nav_home"
                      to="/userHomepage"
                      style={{ textDecoration: "none" }}
                    >
                      <House />
                      Home{" "}
                    </Link>
                  </a>
                </li>
                <li>
                  <a class="nav-link active" aria-current="page" href="#">
                    <Link
                      className="nav_about"
                      to="/about"
                      style={{ textDecoration: "none" }}
                    >
                      <Wrench />
                      About Us{" "}
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <Link
                      className="nav_about"
                      to="/upload"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <Upload />
                      Uploads{" "}
                    </Link>
                  </a>
                </li>

                <li>
                  <a class="nav-link active" aria-current="page" href="#">
                    <Link
                      className="nav_about"
                      to="/ai"
                      style={{ textDecoration: "none" }}
                    >
                      <MessageSquareText />
                      Chat AI{" "}
                    </Link>
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link active dropdown-toggle"
                    href="#"
                    id="nav_profile"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <CircleUserRound />
                    Profile{" "}
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      {" "}
                      <Link
                        className="nav_home dropdown-item"
                        to="/profile"
                        style={{ textDecoration: "none" }}
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <Link
                          className="nav_home dropdown-item"
                          to="/settings"
                          style={{ textDecoration: "none" }}
                        >
                          settings
                        </Link>
                      </a>
                    </li>
                  </ul>
                </li>

                <Link to="/userlogin">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    id="nav-but1"
                  >
                    Sign in
                  </button>
                </Link>

                <button
                  data-bs-toggle="modal"
                  data-bs-target="#logoutmodal"
                  type="button"
                  class="btn btn-primary btn-sm"
                  id="nav-but"
                >
                  Log out
                </button>

                <Link to="/proupgarde">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    id="premium-btn"
                  >
                    <Crown /><br/>
                  <h6>Premium</h6>
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </nav>

        <div style={{ marginTop: "120px" }}>
          <Outlet />
        </div>
        <Footer />
      </div>
      <Logoutmodal />
    </div>
  );
}

function Logoutmodal() {
  return (
    <div class="modal" id="logoutmodal" tabindex="-1">
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
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => localStorage.removeItem("token")}
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

export default Layout;
