import axios from "axios";
import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/comment/viewcomments/${id}`,{
     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
     })
    
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
      
  }, [id]);

  function handledelete(id) {
    axios
    .delete(`http://localhost:3000/comment/deletecomments/${id}`, {
     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
     })

    .then((result) => {
      setComments(comments.filter((comment) => comment._id !== id));
      toast.success("Comment deleted successfully");
    })
    .catch((err) => {
      toast.error("Failed to delete comment");
    });
  } 

  return (
    <div>
      <div>
        <h4 className="user-detail">View All comments</h4>
      </div>
      <table class="table table-top">
        <thead>
          <tr>
            <th scope="col">Sl.no</th>
            <th scope="col">Full name</th>
            <th scope="col">Blog Title</th>
            <th scope="col">Comment</th>
            <th scope="col">Upload date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment, index) => (
            <tr key={comment._id}>
              <th scope="row">{index + 1}</th>
              <td>{comment.userid.fullname}</td>
              <td>{comment.blogid.title}</td>
              <td>{comment.comment}</td>
              <td>{comment.createdAt}</td>
              <td>
                <button
                  className="user-del-button"
                  onClick={() => handledelete(comment._id)}
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

export default Comments;
