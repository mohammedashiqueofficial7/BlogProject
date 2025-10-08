import React, { useState } from "react";
import "../Assets/Styles/Uploads.css";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import MultiSelectDropdown from "./Multiselector";
import { GoogleGenAI } from "@google/genai";

function Uploads() {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [selectedValues, setSelectedValues] = useState([]);

  const options = [
    { value: "Car", label: "Car" },
    { value: "Blogs", label: "Blogs" },
    { value: "Nature", label: "Nature" },
    { value: "Vehicles", label: "Vehicles" },
    { value: "Animals", label: "Animals" },
    { value: "Autobiography", label: "Autobiography" },
    { value: "Designings", label: "Designings" },
  ];
//generate the code of ai image//
  const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  async function gererateimage(prompt) {
    const response = await ai.models.generateImages({
      model: "imagen-3.0-generate-002",
      prompt: prompt,
      config: {
        numberOfImages: 1,
        includeRaiReason: true,
      },
    });

    console.log(response.text);
  }

  const handleInput = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    setBlog({ ...blog, image: e.target.files[0] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.append("category", selectedValues.join(","));
    setLoading(true);
    axios
      .post("http://localhost:3000/blogmodel/uploadblog", formdata, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setBlog({
          title: "",
          description: "",
          image: "",
        });
        setSelectedValues([]);
      })

      .then(() => {
        setLoading(false);
        toast.success("Upload completed");
      });
  };

  return (
    <div>
      <div className="AddBlog-main-Container">
        <form onSubmit={handleSubmit} className="AddBlog-Container">
          {blog.image && (
            <div className="Add-Blog-Image">
              <img src={URL.createObjectURL(blog.image)} alt="" className="" />
            </div>
          )}
          <div className="AddBlog-Content">
            <h1>UPLOAD A BLOG</h1>
            <input type="file" name="image" onChange={handleFile} />

            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleInput}
              placeholder="Enter Blog Title"
            />

            <input
              type="text"
              name="description"
              value={blog.description}
              onChange={handleInput}
              placeholder="Enter Discription"
            />

            <MultiSelectDropdown
              options={options}
              label="Choose Options"
              value={selectedValues}
              onChange={(values) => setSelectedValues(values)}
            />

            <button>{loading && <Loader className="spin" />}UPLOAD</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Uploads;
