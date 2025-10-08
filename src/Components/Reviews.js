import axios from "axios";
import { Star, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function Reviews() {
  const [reviews, setreviews] = useState([
   
  ]);
  useEffect(() => {
    axios.get("http://localhost:3000/admin/ratingslist").then((result) => {
      setreviews(result.data);
    });
  }, []);
  function handledelete(id) {
    axios
      .delete(`http://localhost:3000/admin/deletereview/${id}`)
      .then((result) => {
        setreviews(reviews.filter((review) => review._id !== id));
        toast.success("Review deleted successfully");
      })
      .catch((err) => {
        
        toast.error("Failed to delete review");
      });
  }
  return (
    <div>
      <div>
        <h4 className="user-detail">Reviews Details</h4>
      </div>
      <table class="table table-top">
        <thead>
          <tr>
            <th scope="col">Sl.no</th>
             <th scope="col">Fullname</th>
            <th scope="col">email</th>
            <th scope="col">blog title</th>
            <th scope="col">Ratings</th>
            <th scope="col">Rated at</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={review._id}>
              <th scope="row">{index + 1}</th>
              <td>{review.userid.fullname}</td>
              <td>{review.userid.email}</td>
              <td>{review.blogid.title}</td>
              <td>{review.ratings}<Star/></td>
               <td>{review.createdAt}</td>
              <td>
                <button
                  className="user-del-button"
                  onClick={() => handledelete(review._id)}
                >
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reviews;
