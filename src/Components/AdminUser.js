import axios from "axios";
import "../Assets/Styles/AdminUser.css"
import React, { useEffect, useState } from "react";
import { Trash2, Search, Filter, Download, RefreshCw, Plus, Eye, MoreVertical } from "lucide-react";
import { toast } from "sonner";

function AdminUser() {
  const [usersdata, setusersdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = usersdata.filter(user =>
      user.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, usersdata]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const result = await axios.get("http://localhost:3000/admin/userslist");
      setusersdata(result.data);
    } catch (error) {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handledelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:3000/admin/deleteuser/${id}`);
        setusersdata(usersdata.filter((user) => user._id !== id));
        toast.success("User deleted successfully");
      } catch (error) {
        toast.error("Failed to delete user");
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const exportToPDF = () => {
    import('jspdf').then(({ jsPDF }) => {
      const doc = new jsPDF();
      
      // Header
      doc.setFontSize(20);
      doc.text('Users Report', 20, 20);
      doc.setFontSize(12);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 30);
      doc.text(`Total Users: ${usersdata.length}`, 20, 40);
      
      // Table headers
      let yPos = 60;
      doc.setFontSize(10);
      doc.text('Full Name', 20, yPos);
      doc.text('Email', 80, yPos);
      doc.text('Phone', 140, yPos);
      doc.text('Joined', 180, yPos);
      
      // Table data
      usersdata.forEach((user, index) => {
        yPos += 10;
        if (yPos > 280) {
          doc.addPage();
          yPos = 20;
        }
        doc.text((user.fullname || 'N/A').substring(0, 25), 20, yPos);
        doc.text((user.email || 'N/A').substring(0, 25), 80, yPos);
        doc.text((user.phonenumber || 'N/A').substring(0, 15), 140, yPos);
        doc.text(formatDate(user.createdAt), 180, yPos);
      });
      
      doc.save(`users_report_${new Date().toISOString().split('T')[0]}.pdf`);
    });
  };

  return (
    <div className="admin-users-wrapper">
      {/* Header */}
      <div className="admin-page-header">
        <div className="header-content">
          <h1 className="page-title">User Management</h1>
          <p className="page-subtitle">Manage and monitor all registered users</p>
        </div>
        <div className="header-actions">
          <button className="btn-modern btn-secondary" onClick={fetchUsers}>
            <RefreshCw size={16} />
            Refresh
          </button>
          <button className="btn-modern btn-secondary" onClick={exportToPDF}>
            <Download size={16} />
            Export
          </button>
          <button className="btn-modern btn-primary">
            <Plus size={16} />
            Add User
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="admin-controls">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search users by name or email..."
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

      {/* Users Table */}
      <div className="admin-table-container">
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading users...</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Contact</th>
                  <th>Joined</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar">
                          {user.fullname?.charAt(0)?.toUpperCase() || 'U'}
                        </div>
                        <div className="user-details">
                          <div className="user-name">{user.fullname || 'N/A'}</div>
                          <div className="user-id">ID: {user._id?.slice(-8)}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="contact-info">
                        <div className="email">{user.email}</div>
                        <div className="phone">{user.phonenumber || 'N/A'}</div>
                      </div>
                    </td>
                    <td>
                      <div className="date-info">
                        {formatDate(user.createdAt)}
                      </div>
                    </td>
                    <td>
                      <span className="status-badge active">Active</span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn view" title="View Details">
                          <Eye size={16} />
                        </button>
                        <button 
                          className="action-btn delete" 
                          title="Delete User"
                          onClick={() => handledelete(user._id)}
                        >
                          <Trash2 size={16} />
                        </button>
                        <button className="action-btn more" title="More Options">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredUsers.length === 0 && !loading && (
              <div className="empty-state">
                <div className="empty-icon">👥</div>
                <h3>No users found</h3>
                <p>No users match your search criteria</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="admin-stats">
        <div className="stat-item">
          <span className="stat-label">Total Users:</span>
          <span className="stat-value">{usersdata.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Showing:</span>
          <span className="stat-value">{filteredUsers.length}</span>
        </div>
      </div>
    </div>
  );
}

export default AdminUser;