import axios from "axios";
import { CircleCheck, CircleX, Eye, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Comments from "./Comments";

function BlogsVerify() {
  const [dashboardData, setdashbordData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/admin/blogslist").then((result) => {
      setdashbordData(result.data);
    });
  }, []);

  function onclick(id) {
    Navigate(`/comments/${id}`);}
    
    
  function handlesubmit(id) {
    axios
      .put(
        `http://localhost:3000/admin/verifyblog/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((result) => {
        setdashbordData(dashboardData.map((blog) => {if(blog._id == id){
          blog.verified = true
        } return blog}));
        toast.success("Blog verified successfully");
      })
      .catch((err) => {
        console.error("Error verifying blog:", err);
        alert(err?.response?.data?.message || err?.message || "Error");
      });
  }
    function handledelete(id) {
        axios
            .delete(`http://localhost:3000/admin/deleteblog/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
            .then((result) => {
                setdashbordData(dashboardData.filter((blog) => blog._id !== id));
                toast.success("Blog deleted successfully");
            })
            .catch((err) => {
                console.error("Error deleting blog:", err);
                alert(err?.response?.data?.message || err?.message || "Error");
            });
    }

  return (
    <div>
      <div>
        <h4 className="user-detail">Blog Details</h4>
      </div>
      <div className="table-responsive">
        <table className="table table-top">
          <thead>
            <tr>
              <th scope="col">SL.NO</th>
              <th scope="col">BLOG ID</th>
              <th scope="col">BLOG TITLE</th>
              <th scope="col">UPLOAD DATE</th>
              <th scope="col">BLOG STATUS</th>
              <th scope="col">View Comments</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody >
              {
                  dashboardData.map((blog,idx) => (
                      <tr key={blog._id}>
                      <th scope="row">{idx+1}</th>
                      <td>{blog._id}</td>
                      <td>{blog.title}</td>

                      <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                      <td>{blog.verified?"Verified":"Not Verified"}</td>
                      <td><button onClick={()=>onclick(blog._id)} type="button" className="btn btn-dark" ><Eye/></button></td>
                      <td>
                          <button onClick={()=>handlesubmit(blog._id)} type="button" className="btn btn-success "><CircleCheck/></button>
                          <button onClick={()=>handledelete(blog._id)} type="button" className="btn btn-danger"><CircleX /></button>
                      </td>
                      </tr>
                  ))
              }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogsVerify;
