import React, { useEffect, useState } from "react";
import "../Assets/Styles/BlogOpen.css";
import { Heart, Star } from "lucide-react";
import blog1 from "../Assets/Images/blog2.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Tokens } from "@google/genai";

function BlogOpen() {
  const [viewblog, setviewblog] = useState("");
  const [comment, setcomment] = useState([]);
  const [rf, setrf] = useState(false);
  const [suggestion, setsuggestion] = useState([]);
  const { id } = useParams();
  const [rating, setrating] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/blogmodel/viewblog/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        setviewblog(result.data);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
      });

    axios
      .get(`http://localhost:3000/rating/${id}`)
      .then((result) => setrating(result.data.ratings))
      .catch((err) => {
        console.error("Error fetching rating:", err);
      });

    axios
      .get(`http://localhost:3000/comment/viewcomments/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((comment) => {
        setcomment(comment.data);
      });

    axios
      .get(`http://localhost:3000/blogmodel/getsuggestions/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((result) => {
        setsuggestion(result.data);
      })
      .catch((err) => {
        console.error("Error fetching suggestions:", err);
      });
    axios
      .get(`http://localhost:3000/favourites/checkfavourite/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setFavourite(res.data.value);
      })
      .catch((err) => {
        console.error("Error checking favourite:", err);
      });
  }, [id, rf]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    if (!e.target.comment.value.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }
    axios
      .post(
        `http://localhost:3000/comment/addcomment/${id}`,
        {
          comment: e.target.comment.value,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        toast.success("Comment submitted successfully");
        setrf(!rf);
        e.target.reset();
      })
      .catch((err) => {
        toast.error("Failed to submit comment");
      });
  }

  const [Favourite, setFavourite] = useState(false);

  const toggleFavourite = () => {
    if (Favourite) {
      axios
        .delete("http://localhost:3000/favourites/removefavourites/" + id, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          setFavourite(false);
          toast.error("Removed from favourites");
        });
    } else {
      axios
        .post("http://localhost:3000/favourites/addfavourites/" + id,null,{
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
        .then((res) => {
          setFavourite(true);
          toast.success("Added to favourites");
        });
    }
  };

  return (
    <div className="d-flex">
      <div class="blog-container">
        <header class="blog-header">
          <h1>My Blog</h1>
        </header>

        <div class="blog-post">
          <img
            src={"http://localhost:3000/uploads/" + viewblog.image}
            class="blog-banner"
          />

          {/* Favourite button */}
          <div className="d-flex justify-content-end p-2">
            <button
              onClick={toggleFavourite}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "2rem",
                color: Favourite ? "red" : "grey",
                transition: "0.3s ease-in-out",
              }}
            >
              {Favourite ? "❤️" : "🤍"}
            </button>
          </div>

          <h2 class="blog-title">{viewblog.title}</h2>
          <div class="blog-meta">
            By <span>Admin</span> | July 16, 2025
          </div>

          <div class="blog-content">
            <p>{viewblog.description}</p>
          </div>

          <div class="blog-comments">
            <h3>Comments</h3>
            {comment.map((comment, index) => (
              <div key={comment._id} class="comment">
                <p>
                  <strong>{comment.userid.fullname}:</strong> {comment.comment}
                </p>
                <p class="comment-date">
                  {new Date(comment.createdAt).toLocaleString()}
                </p>
              </div>
            ))}

            <form class="comment-form" onSubmit={handleSubmit}>
              <textarea
                name="comment"
                placeholder="Leave a comment..."
              ></textarea>
              <button type="submit">Post Comment</button>
            </form>

            <div>
              <h3>Ratings</h3>
              <RatingComponent myRating={rating} id={id} />
            </div>
          </div>
        </div>
      </div>

      {/* suggestion */}

      <div>
        <div class="d-flex flex-column mb-3" style={{ width: "18rem" }}>
          {suggestion.map((blog) => (
            <div
              class="card mb-2"
              key={blog._id}
              style={{ backgroundColor: "bisque" }}
            >
              <img
                src={"http://localhost:3000/uploads/" + blog.image}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{blog.title}</h5>
                {/* <p class="card-text">{blog.description}</p> */}
                <a href={`/BlogOpen/${blog._id}`} class="btn btn-primary">
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Rating function

function RatingComponent({ myRating = 4, id }) {
  const [showbutton, setshowbutton] = useState(false);
  const [rating, setrating] = useState(myRating);

  const handleSubmit = (index) => {
    setrating(index + 1);
    setshowbutton(true);
  };

  const sendrating = () => {
    axios
      .post(
        `http://localhost:3000/rating/${id}`,
        { ratings: rating },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        setshowbutton(false);
        toast.success("Rating submitted successfully");
        setrating(rating);
      })
      .catch((err) => {
        setshowbutton(false);
        console.error("Error submitting rating:", err);
      });
  };

  // Star code

  return (
    <div className="d-flex bg-white align-items-center justify-content-between border border-dark rounded min-w-600 p-2">
      <div className="d-flex gap-3 p-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="d-flex justify-content-center">
            <Star
              onClick={() => handleSubmit(index)}
              size={25}
              strokeWidth={0}
              fill={index < rating ? "#e7c651ff" : "#b9bdc0ff"}
              cursor="pointer"
              className="star"
            />
          </div>
        ))}
      </div>
      {showbutton && (
        <button
          type="button"
          class="btn btn-success "
          onClick={sendrating}
          className="float-end btn-submit"
        >
          {" "}
          Submit
        </button>
      )}
    </div>
  );
}

export default BlogOpen;
