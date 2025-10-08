import React, { useEffect, useState } from "react";
import "../Assets/Styles/UserHomepage.css";
import img from "../Assets/Images/pixelcut-export.png";
import canvas from "../Assets/Images/canvas.jpg";
import blog2 from "../Assets/Images/blog2.jpg";
import blog3 from "../Assets/Images/blog3.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { Crown, Heart, Info } from "lucide-react";

function UserHomepage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/blogmodel/getblogs?search=" + search)
      .then((result) => {
        setSearch1(result.data);
      });

    axios
      .get("http://localhost:3000/blogmodel/viewblog3" )
      .then((result) => {
       setBlogs (result.data);
      });

    axios
      .get("http://localhost:3000/blogmodel/viewblog4")
      .then((result) => {
        setSearch1(result.data);
      });
  }, [search]);



  return (
    <div>
      <div class="cap_main">

        <div className="blog_head">
          Hey, Welcome to the Blogging World <br />
          <span className="blog_head_span1">Share your thoughts,</span>
          <br />
          <span className="blog_head_span2">Explore the world of blogs.</span>
        </div>

        <div class="caption">
          inspirational designs, illustrations, and graphic elements from the
          worlds best designers.<br></br>
          Want more inspiration?
        </div>
      </div>
      <div className="d-flex justify-center">
        <div class="d-flex mx-auto mt-5">
          <div class="search_but_head">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                onChange={(e) => setSearch(e.target.value)}
              />
              <label for="floatingInput">Search your interests</label>
            </div>
          </div>
        </div>
      </div>
      <div className="grid_adjust">
        <div class="container text-center">
          <div class="row">
            {blogs.map((blog) => {
              return (
                <div class="col-12">
                  <div class="card-user">
                    <img
                      src={"http://localhost:3000/uploads/" + blog.image}
                      class="card-img-top size"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">{blog.title}</h5>
                      <p class="card-text">{/* {blog.description} */}</p>
                      <Link
                        to={"/BlogOpen" + "/" + blog._id}
                        style={{ textDecoration: "none" }}
                      >
                        <button className="view-button">View More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>

      </div>
      <div>
        <div className="grid_adjust ">
          <div class="container text-center">
            <div class="row">
              {search1.map((blog) => {
                return (
                  <div class="col-6">
                    <div class="card">
                      <img
                        src={"http://localhost:3000/uploads/" + blog.image}
                        class="card-img-top size"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">{blog.title}</h5>
                        <p class="card-text">{/* {blog.description} */}</p>
                        <Link
                          to={"/BlogOpen" + "/" + blog._id}
                          style={{ textDecoration: "none" }}
                        >
                          <button className="view-button">View More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHomepage;
