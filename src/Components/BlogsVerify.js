import axios from "axios";
import {
  CheckCircle,
  X,
  Eye,
  Trash2,
  Search,
  Filter,
  Download,
  RefreshCw,
  FileText,
  Calendar,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "../Assets/Styles/AdminUser.css";
import API_BASE_URL from "../config";

function BlogsVerify() {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const filtered = blogsData.filter(
      (blog) =>
        blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog._id?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, blogsData]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`${API_BASE_URL}/admin/blogslist`);
      setBlogsData(result.data);
    } catch (error) {
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (id) => {
    try {
      await axios.put(
        `${API_BASE_URL}/admin/verifyblog/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBlogsData(
        blogsData.map((blog) => {
          if (blog._id === id) {
            blog.verified = true;
          }
          return blog;
        })
      );
      toast.success("Blog verified successfully");
    } catch (err) {
      toast.error("Failed to verify blog");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`${API_BASE_URL}/admin/deleteblog/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setBlogsData(blogsData.filter((blog) => blog._id !== id));
        toast.success("Blog deleted successfully");
      } catch (err) {
        toast.error("Failed to delete blog");
      }
    }
  };

  const viewComments = (id) => {
    navigate(`/comments/${id}`);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const exportToPDF = () => {
    import("jspdf").then(({ jsPDF }) => {
      const doc = new jsPDF();

      // Header
      doc.setFontSize(20);
      doc.text("Blogs Report", 20, 20);
      doc.setFontSize(12);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 30);
      doc.text(`Total Blogs: ${blogsData.length}`, 20, 40);
      doc.text(
        `Verified: ${blogsData.filter((b) => b.verified).length}`,
        20,
        50
      );

      // Table headers
      let yPos = 70;
      doc.setFontSize(10);
      doc.text("Title", 20, yPos);
      doc.text("Author", 100, yPos);
      doc.text("Date", 140, yPos);
      doc.text("Status", 180, yPos);

      // Table data
      blogsData.forEach((blog, index) => {
        yPos += 10;
        if (yPos > 280) {
          doc.addPage();
          yPos = 20;
        }
        doc.text((blog.title || "N/A").substring(0, 30), 20, yPos);
        doc.text((blog.author || "Unknown").substring(0, 15), 100, yPos);
        doc.text(formatDate(blog.createdAt), 140, yPos);
        doc.text(blog.verified ? "Verified" : "Pending", 180, yPos);
      });

      doc.save(`blogs_report_${new Date().toISOString().split("T")[0]}.pdf`);
    });
  };

  return (
    <div className="admin-users-wrapper">
      {/* Header */}
      <div className="admin-page-header">
        <div className="header-content">
          <h1 className="page-title">Blog Management</h1>
          <p className="page-subtitle">
            Review and manage all blog submissions
          </p>
        </div>
        <div className="header-actions">
          <button className="btn-modern btn-secondary" onClick={fetchBlogs}>
            <RefreshCw size={16} />
            Refresh
          </button>
          <button className="btn-modern btn-secondary" onClick={exportToPDF}>
            <Download size={16} />
            Export
          </button>
          <button className="btn-modern btn-primary">
            <CheckCircle size={16} />
            Approve All
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="admin-controls">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search blogs by title or ID..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-actions">
          <button className="btn-modern btn-secondary">
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      {/* Blogs Table */}
      <div className="admin-table-container">
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading blogs...</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Blog</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.map((blog, idx) => (
                  <tr key={blog._id}>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar blog-avatar">
                          <FileText size={16} />
                        </div>
                        <div className="user-details">
                          <div className="user-name">{blog.title}</div>
                          <div className="user-id">
                            ID: {blog._id?.slice(-8)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="contact-info">
                        <div className="email">{blog.author || "Unknown"}</div>
                        <div className="phone">#{idx + 1}</div>
                      </div>
                    </td>
                    <td>
                      <div className="date-info">
                        {formatDate(blog.createdAt)}
                      </div>
                    </td>
                    <td>
                      <span
                        className={`status-badge ${
                          blog.verified ? "active" : "inactive"
                        }`}
                      >
                        {blog.verified ? "Verified" : "Pending"}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="action-btn view"
                          title="View Comments"
                          onClick={() => viewComments(blog._id)}
                        >
                          <Eye size={16} />
                        </button>
                        {!blog.verified && (
                          <button
                            className="action-btn verify"
                            title="Verify Blog"
                            onClick={() => handleVerify(blog._id)}
                          >
                            <CheckCircle size={16} />
                          </button>
                        )}
                        <button
                          className="action-btn delete"
                          title="Delete Blog"
                          onClick={() => handleDelete(blog._id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredBlogs.length === 0 && !loading && (
              <div className="empty-state">
                <div className="empty-icon">📝</div>
                <h3>No blogs found</h3>
                <p>No blogs match your search criteria</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="admin-stats">
        <div className="stat-item">
          <span className="stat-label">Total Blogs:</span>
          <span className="stat-value">{blogsData.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Verified:</span>
          <span className="stat-value">
            {blogsData.filter((b) => b.verified).length}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Pending:</span>
          <span className="stat-value">
            {blogsData.filter((b) => !b.verified).length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogsVerify;
