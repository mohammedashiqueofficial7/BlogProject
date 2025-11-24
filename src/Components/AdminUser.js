import axios from "axios";
import "../Assets/Styles/AdminUser.css"
import React, { useEffect, useState } from "react";
import { Trash2  } from "lucide-react";
import { toast } from "sonner";

function AdminUser() {
  const [usersdata, setusersdata] = useState([
    {
      _id: "",
      fullname: "",
      email: "",
      phonenumber: "",
      dateofbirth: "",
      createdAt: "",
      updatedAt: "",
    },
  ]);
  useEffect(() => {
    axios.get("http://localhost:3000/admin/userslist").then((result) => {
      setusersdata(result.data);
    });
  }, []);


  function handledelete(id) {
    axios.delete(`http://localhost:3000/admin/deleteuser/${id}`)
    .then((result) => {
      setusersdata(usersdata.filter((user) => user._id !== id));
      toast.success("User deleted successfully");
    })
  }
  return (
    <div>
        <div>
      <h4 className="user-detail">User Details</h4>
      </div>
      <div className="table-responsive">
        <table className="table table-top">
          <thead>
            <tr>
              <th scope="col">User id</th>
              <th scope="col">Full name</th>
              <th scope="col">Email address</th>
              <th scope="col">Phone number</th>
              <th scope="col">Date of Join</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersdata.map((user) => (
              <tr key={user._id}>
                <th scope="row">{user._id}</th>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.phonenumber}</td>
                <td>{user.createdAt}</td>
                {/* Delete button to remove user */}
                <td><button className="user-del-button" onClick={()=>handledelete(user._id)}>

                    <Trash2 />

                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUser;
