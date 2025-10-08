import React from "react";
import land from "../Assets/Images/unsplash.jpg";
import land2 from "../Assets/Images/newunsplash.jpg";
import onam from "../Assets/Images/Happy Onam 2024.jpg";
import "../Assets/Styles/Landing.css";
import { Info, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";

function Landing() {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={land} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <button
                className="button-info"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <Info />
                Click Here
              </button>
              <h1 className="text-landing">WELCOME TO BLOG PLATFORM !</h1>

              <p className="text-landing1">
                Dive into a world of insightful articles, engaging stories, and
                the latest trends. <br />
                Whether you're here to read, share, or connect, our blog is your
                go-to destination for quality content.
                <br />
                Join our community of passionate readers and writers today!
              </p>

              <Link
                to="/reg"
                style={{ textDecoration: "none" }}
                className="landing-button"
              >
                {" "}
                Get Started Now <MoveRight />
              </Link>
            </div>
          </div>

          <div class="carousel-item">
            <img src={land2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="text-landing">Welcome to Our Blog Platform!</h1>
              <Link
                to="/reg"
                style={{ textDecoration: "none" }}
                className="landing-button"
              >
                {" "}
                Get Started Now <MoveRight />
              </Link>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel" color="yellow">
                Information
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4>
                Login / Register to continue!
                <br />
                View your profile
              </h4>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
