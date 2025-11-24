import axios from "axios";
import { Trash2, Search, Filter, Download, RefreshCw, MessageSquare, User, ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "../Assets/Styles/AdminUser.css";

function Comments() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredComments, setFilteredComments] = useState([]);
  const [blogTitle, setBlogTitle] = useState("");

  useEffect(() => {
    fetchComments();
  }, [id]);

  useEffect(() => {
    const filtered = comments.filter(comment =>
      comment.userid?.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.comment?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComments(filtered);
  }, [searchTerm, comments]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/comment/viewcomments/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      const data = await response.json();
      setComments(data);
      if (data.length > 0) {
        setBlogTitle(data[0].blogid?.title || "Unknown Blog");
      }
    } catch (error) {
      toast.error("Failed to fetch comments");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      try {
        await axios.delete(`http://localhost:3000/comment/deletecomments/${commentId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        setComments(comments.filter((comment) => comment._id !== commentId));
        toast.success("Comment deleted successfully");
      } catch (err) {
        toast.error("Failed to delete comment");
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateComment = (comment, maxLength = 100) => {
    if (comment.length <= maxLength) return comment;
    return comment.substring(0, maxLength) + "...";
  };

  const exportToPDF = () => {
    import('jspdf').then(({ jsPDF }) => {
      const doc = new jsPDF();
      
      // Header
      doc.setFontSize(20);
      doc.text('Comments Report', 20, 20);
      doc.setFontSize(12);
      doc.text(`Blog: ${blogTitle}`, 20, 30);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 40);
      doc.text(`Total Comments: ${comments.length}`, 20, 50);
      
      // Table headers
      let yPos = 70;
      doc.setFontSize(10);
      doc.text('Commenter', 20, yPos);
      doc.text('Comment', 80, yPos);
      doc.text('Date', 160, yPos);
      
      // Table data
      comments.forEach((comment, index) => {
        yPos += 15;
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        doc.text((comment.userid?.fullname || 'Unknown').substring(0, 25), 20, yPos);
        
        // Split long comments into multiple lines
        const commentText = (comment.comment || 'No comment').substring(0, 100);
        const lines = doc.splitTextToSize(commentText, 70);
        doc.text(lines, 80, yPos);
        
        doc.text(formatDate(comment.createdAt), 160, yPos);
        
        if (lines.length > 1) yPos += (lines.length - 1) * 5;
      });
      
      doc.save(`comments_${blogTitle.replace(/[^a-z0-9]/gi, '_')}_${new Date().toISOString().split('T')[0]}.pdf`);
    });
  };

  return (
    <div className="admin-users-wrapper">
      {/* Header */}
      <div className="admin-page-header">
        <div className="header-content">
          <div className="header-nav">
            <button 
              className="btn-modern btn-secondary back-btn"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={16} />
              Back
            </button>
          </div>
          <h1 className="page-title">Blog Comments</h1>
          <p className="page-subtitle">
            {blogTitle ? `Comments for "${blogTitle}"` : "Manage blog comments and user feedback"}
          </p>
        </div>
        <div className="header-actions">
          <button className="btn-modern btn-secondary" onClick={fetchComments}>
            <RefreshCw size={16} />
            Refresh
          </button>
          <button className="btn-modern btn-secondary" onClick={exportToPDF}>
            <Download size={16} />
            Export
          </button>
          <button className="btn-modern btn-primary">
            <Trash2 size={16} />
            Delete All
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="admin-controls">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search comments by user or content..."
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

      {/* Comments Table */}
      <div className="admin-table-container">
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading comments...</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Commenter</th>
                  <th>Comment</th>
                  <th>Blog</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredComments.map((comment, index) => (
                  <tr key={comment._id}>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar">
                          {comment.userid?.fullname?.charAt(0)?.toUpperCase() || 'U'}
                        </div>
                        <div className="user-details">
                          <div className="user-name">{comment.userid?.fullname || 'Unknown User'}</div>
                          <div className="user-id">Comment #{index + 1}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="comment-content">
                        <div className="comment-text" title={comment.comment}>
                          {truncateComment(comment.comment)}
                        </div>
                        {comment.comment.length > 100 && (
                          <button className="expand-comment">Read more</button>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="contact-info">
                        <div className="email">{comment.blogid?.title || 'Unknown Blog'}</div>
                        <div className="phone">Blog ID: {comment.blogid?._id?.slice(-8)}</div>
                      </div>
                    </td>
                    <td>
                      <div className="date-info">
                        {formatDate(comment.createdAt)}
                      </div>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="action-btn delete" 
                          title="Delete Comment"
                          onClick={() => handleDelete(comment._id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredComments.length === 0 && !loading && (
              <div className="empty-state">
                <div className="empty-icon">💬</div>
                <h3>No comments found</h3>
                <p>
                  {searchTerm 
                    ? "No comments match your search criteria"
                    : "This blog doesn't have any comments yet"}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="admin-stats">
        <div className="stat-item">
          <span className="stat-label">Total Comments:</span>
          <span className="stat-value">{comments.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Showing:</span>
          <span className="stat-value">{filteredComments.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Blog:</span>
          <span className="stat-value">{blogTitle}</span>
        </div>
      </div>
    </div>
  );
}

export default Comments;