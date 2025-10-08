import { useEffect, useState } from "react";
import "../Assets/Styles/Favourite.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Favourites() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/favourites/viewfavourites", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((result) => {
        setBlogs(result.data.favourites);
      });
  }, []);
  return (
    <div className="fav-main">
      <div>
        <h1 className="fav-head">Favourites</h1>
      </div>
      <div>
        <p >LIKED IMAGES WILL BE SHOW HERE.</p>
      </div>

      <div>
        {blogs.map((blog) => (
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={"http://localhost:3000/uploads/" + blog.blogid?.image}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{blog.blogid.title}</h5>
              <Link
                to={"/BlogOpen" + "/" + blog.blogid._id}
                style={{ textDecoration: "none" }}
              >
                <button className="view-button">View More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Link to="/userHomepage" style={{ textDecoration: "none" }}>
          <button className="  fav-back-button">Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Favourites;
