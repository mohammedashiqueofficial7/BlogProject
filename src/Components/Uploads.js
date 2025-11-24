import React, { useState } from "react";
import "../Assets/Styles/Uploads.css";
import axios from "axios";
import { toast } from "sonner";
import { Upload, Image, Type, Tag, Sparkles, Eye, Save, X } from "lucide-react";
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
  const [dragActive, setDragActive] = useState(false);

  const options = [
    { value: "Technology", label: "Technology" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Travel", label: "Travel" },
    { value: "Food", label: "Food" },
    { value: "Health", label: "Health" },
    { value: "Business", label: "Business" },
    { value: "Education", label: "Education" },
    { value: "Entertainment", label: "Entertainment" },
  ];

  const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  async function generateImage(prompt) {
    try {
      const response = await ai.models.generateImages({
        model: "imagen-3.0-generate-002",
        prompt: prompt,
        config: {
          numberOfImages: 1,
          includeRaiReason: true,
        },
      });
      console.log(response.text);
    } catch (error) {
      console.error("Image generation failed:", error);
    }
  }

  const handleInput = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlog({ ...blog, image: file });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setBlog({ ...blog, image: e.dataTransfer.files[0] });
    }
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
        setLoading(false);
        toast.success("Blog uploaded successfully!");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Upload failed. Please try again.");
      });
  };

  const clearImage = () => {
    setBlog({ ...blog, image: "" });
  };

  return (
    <div className="upload-wrapper">
      <div className="upload-container">
        <div className="upload-header">
          <div className="upload-title">
            <Sparkles className="title-icon" />
            <h1>Create New Blog Post</h1>
          </div>
          <p className="upload-subtitle">Share your thoughts with the world</p>
        </div>

        <form onSubmit={handleSubmit} className="upload-form">
          {/* Image Upload Section */}
          <div className="form-section">
            <label className="section-label">
              <Image size={20} />
              Featured Image
            </label>
            
            {blog.image ? (
              <div className="image-preview">
                <img 
                  src={URL.createObjectURL(blog.image)} 
                  alt="Preview" 
                  className="preview-image"
                />
                <button 
                  type="button" 
                  className="remove-image"
                  onClick={clearImage}
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div 
                className={`upload-zone ${dragActive ? 'drag-active' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="upload-icon" />
                <p className="upload-text">
                  Drag and drop an image here, or 
                  <label className="upload-link">
                    browse files
                    <input 
                      type="file" 
                      name="image" 
                      onChange={handleFile}
                      accept="image/*"
                      hidden
                    />
                  </label>
                </p>
                <p className="upload-hint">PNG, JPG, GIF up to 10MB</p>
              </div>
            )}
          </div>

          {/* Title Section */}
          <div className="form-section">
            <label className="section-label">
              <Type size={20} />
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleInput}
              placeholder="Enter an engaging title for your blog post..."
              className="form-input title-input"
              required
            />
          </div>

          {/* Description Section */}
          <div className="form-section">
            <label className="section-label">
              <Type size={20} />
              Description
            </label>
            <textarea
              name="description"
              value={blog.description}
              onChange={handleInput}
              placeholder="Write a compelling description that captures the essence of your blog post..."
              className="form-input description-input"
              rows="6"
              required
            />
          </div>

          {/* Categories Section */}
          <div className="form-section">
            <label className="section-label">
              <Tag size={20} />
              Categories
            </label>
            <MultiSelectDropdown
              options={options}
              label="Select relevant categories"
              value={selectedValues}
              onChange={(values) => setSelectedValues(values)}
            />
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button 
              type="button" 
              className="btn-modern btn-secondary preview-btn"
            >
              <Eye size={18} />
              Preview
            </button>
            
            <button 
              type="submit" 
              className="btn-modern btn-primary submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="loading-spinner"></div>
                  Publishing...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Publish Blog
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Uploads;