import React, { useEffect, useState } from "react";
import "../Assets/Styles/UserHomepage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Search, TrendingUp, Clock, Eye, Heart, BookOpen, Filter } from "lucide-react";

function UserHomepage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (search.trim()) {
      searchBlogs();
    } else {
      setSearchResults([]);
    }
  }, [search]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      // Try to fetch all blogs first, fallback to verified blogs
      const response = await axios.get("http://localhost:3000/blogmodel/getblogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      // Fallback to original endpoint
      try {
        const fallbackResponse = await axios.get("http://localhost:3000/blogmodel/viewblog3");
        setBlogs(fallbackResponse.data);
      } catch (fallbackError) {
        console.error("Fallback fetch failed:", fallbackError);
      }
    } finally {
      setLoading(false);
    }
  };

  const searchBlogs = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/blogmodel/getblogs?search=${search}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching blogs:", error);
    }
  };

  const displayBlogs = search.trim() ? searchResults : blogs;

  return (
    <div className="homepage-wrapper">
      {/* Hero Section */}
      <section className="homepage-hero">
        <div className="hero-content-home">
          <div className="hero-badge-home">
            <TrendingUp size={16} />
            <span>Discover Amazing Content</span>
          </div>
          
          <h1 className="hero-title-home">
            Welcome to the <span className="text-gradient">Blogging World</span>
          </h1>
          
          <p className="hero-subtitle-home">
            Share your thoughts, explore diverse perspectives, and connect with a community of passionate writers and readers.
          </p>

          {/* Search Section */}
          <div className="search-container">
            <div className="search-wrapper">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search for blogs, topics, or authors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-header">
            <h2 className="filter-title">
              {search.trim() ? `Search Results for "${search}"` : 'Latest Blog Posts'}
            </h2>
            <div className="filter-actions">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                <BookOpen size={16} />
                All Posts
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'recent' ? 'active' : ''}`}
                onClick={() => setActiveFilter('recent')}
              >
                <Clock size={16} />
                Recent
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'popular' ? 'active' : ''}`}
                onClick={() => setActiveFilter('popular')}
              >
                <TrendingUp size={16} />
                Popular
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blogs-section">
        <div className="container">
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading amazing content...</p>
            </div>
          ) : displayBlogs.length > 0 ? (
            <div className="blogs-grid">
              {displayBlogs.map((blog, index) => (
                <article key={blog._id} className="blog-card card-modern animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="blog-image-container">
                    <img
                      src={`http://localhost:3000/uploads/${blog.image}`}
                      alt={blog.title}
                      className="blog-image"
                    />
                    <div className="blog-overlay">
                      <Link
                        to={`/BlogOpen/${blog._id}`}
                        className="blog-overlay-btn"
                      >
                        <Eye size={18} />
                        Read More
                      </Link>
                    </div>
                  </div>
                  
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-category">{blog.category || 'General'}</span>
                      <span className="blog-date">
                        <Clock size={14} />
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="blog-title">{blog.title}</h3>
                    
                    <p className="blog-excerpt">
                      {blog.description ? blog.description.substring(0, 120) + '...' : 'Click to read this amazing blog post and discover new insights.'}
                    </p>
                    
                    <div className="blog-actions">
                      <Link
                        to={`/BlogOpen/${blog._id}`}
                        className="btn-modern btn-primary blog-read-btn"
                      >
                        Read Article
                      </Link>
                      
                      <div className="blog-stats">
                        <button className="stat-btn">
                          <Heart size={16} />
                          <span>{blog.likes || 0}</span>
                        </button>
                        <button className="stat-btn">
                          <Eye size={16} />
                          <span>{blog.views || 0}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                <Search size={48} />
              </div>
              <h3>No blogs found</h3>
              <p>
                {search.trim() 
                  ? `No results found for "${search}". Try different keywords.`
                  : 'No blog posts available at the moment. Check back later!'}
              </p>
              {search.trim() && (
                <button 
                  className="btn-modern btn-secondary"
                  onClick={() => setSearch('')}
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default UserHomepage;
