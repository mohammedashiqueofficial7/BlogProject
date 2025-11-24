import axios from "axios";
import { Star, Trash2, Search, Filter, Download, RefreshCw, MessageSquare, User, Calendar } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import "../Assets/Styles/AdminUser.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReviews, setFilteredReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    const filtered = reviews.filter(review =>
      review.userid?.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.userid?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.blogid?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReviews(filtered);
  }, [searchTerm, reviews]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const result = await axios.get("http://localhost:3000/admin/ratingslist");
      setReviews(result.data);
    } catch (error) {
      toast.error("Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await axios.delete(`http://localhost:3000/admin/deletereview/${id}`);
        setReviews(reviews.filter((review) => review._id !== id));
        toast.success("Review deleted successfully");
      } catch (err) {
        toast.error("Failed to delete review");
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={14}
        className={index < rating ? 'star-filled' : 'star-empty'}
        fill={index < rating ? '#fbbf24' : 'none'}
        stroke={index < rating ? '#fbbf24' : '#d1d5db'}
      />
    ));
  };

  const getAverageRating = () => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.ratings, 0);
    return (total / reviews.length).toFixed(1);
  };

  const exportToPDF = () => {
    import('jspdf').then(({ jsPDF }) => {
      const doc = new jsPDF();
      
      // Header
      doc.setFontSize(20);
      doc.text('Reviews Report', 20, 20);
      doc.setFontSize(12);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 30);
      doc.text(`Total Reviews: ${reviews.length}`, 20, 40);
      doc.text(`Average Rating: ${getAverageRating()} stars`, 20, 50);
      
      // Table headers
      let yPos = 70;
      doc.setFontSize(10);
      doc.text('Reviewer', 20, yPos);
      doc.text('Blog Title', 80, yPos);
      doc.text('Rating', 140, yPos);
      doc.text('Date', 170, yPos);
      
      // Table data
      reviews.forEach((review, index) => {
        yPos += 10;
        if (yPos > 280) {
          doc.addPage();
          yPos = 20;
        }
        doc.text((review.userid?.fullname || 'Unknown').substring(0, 25), 20, yPos);
        doc.text((review.blogid?.title || 'Unknown Blog').substring(0, 25), 80, yPos);
        doc.text(`${review.ratings}/5`, 140, yPos);
        doc.text(formatDate(review.createdAt), 170, yPos);
      });
      
      doc.save(`reviews_report_${new Date().toISOString().split('T')[0]}.pdf`);
    });
  };

  return (
    <div className="admin-users-wrapper">
      {/* Header */}
      <div className="admin-page-header">
        <div className="header-content">
          <h1 className="page-title">Reviews & Ratings</h1>
          <p className="page-subtitle">Monitor and manage user feedback and ratings</p>
        </div>
        <div className="header-actions">
          <button className="btn-modern btn-secondary" onClick={fetchReviews}>
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
            placeholder="Search reviews by user, email, or blog title..."
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

      {/* Reviews Table */}
      <div className="admin-table-container">
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading reviews...</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Reviewer</th>
                  <th>Blog</th>
                  <th>Rating</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredReviews.map((review, index) => (
                  <tr key={review._id}>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar">
                          {review.userid?.fullname?.charAt(0)?.toUpperCase() || 'U'}
                        </div>
                        <div className="user-details">
                          <div className="user-name">{review.userid?.fullname || 'Unknown User'}</div>
                          <div className="user-id">{review.userid?.email || 'No email'}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="contact-info">
                        <div className="email">{review.blogid?.title || 'Unknown Blog'}</div>
                        <div className="phone">Review #{index + 1}</div>
                      </div>
                    </td>
                    <td>
                      <div className="rating-display">
                        <div className="stars-container">
                          {renderStars(review.ratings)}
                        </div>
                        <span className="rating-number">{review.ratings}/5</span>
                      </div>
                    </td>
                    <td>
                      <div className="date-info">
                        {formatDate(review.createdAt)}
                      </div>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className="action-btn delete" 
                          title="Delete Review"
                          onClick={() => handleDelete(review._id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredReviews.length === 0 && !loading && (
              <div className="empty-state">
                <div className="empty-icon">⭐</div>
                <h3>No reviews found</h3>
                <p>No reviews match your search criteria</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="admin-stats">
        <div className="stat-item">
          <span className="stat-label">Total Reviews:</span>
          <span className="stat-value">{reviews.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Average Rating:</span>
          <span className="stat-value">{getAverageRating()} ⭐</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Showing:</span>
          <span className="stat-value">{filteredReviews.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Reviews;