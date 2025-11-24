import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  LineChart,
  Line,
  ResponsiveContainer
} from "recharts";
import "../Assets/Styles/AdminUser.css";
import axios from "axios";
import { Download, RefreshCw, Calendar, TrendingUp, Users, FileText, CheckCircle, Clock } from "lucide-react";

function Reports() {
  const [dashboardData, setDashboardData] = useState({
    usercount: 0,
    blogcount: 0,
    verifiedcount: 0,
    pendingcount: 0,
    deletingcount: 0,
    ratingcount: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios.get("http://localhost:3000/admin/dashboard");
      setDashboardData(result.data);
    } catch (error) {
      console.error("Failed to fetch dashboard data");
    } finally {
      setLoading(false);
    }
  };

  const handleExport = (format) => {
    // Mock export functionality - in real app, this would generate and download files
    switch (format) {
      case 'pdf':
        alert('Exporting report as PDF...');
        break;
      case 'excel':
        alert('Exporting data as Excel spreadsheet...');
        break;
      case 'csv':
        alert('Exporting data as CSV file...');
        break;
      case 'charts':
        alert('Exporting charts as images...');
        break;
      case 'email':
        alert('Sending report via email...');
        break;
      default:
        alert('Export option not available');
    }
  };

  const chartData = [
    { name: "Users", value: dashboardData.usercount, fill: "#3b82f6" },
    { name: "Total Blogs", value: dashboardData.blogcount, fill: "#8b5cf6" },
    { name: "Verified", value: dashboardData.verifiedcount, fill: "#10b981" },
    { name: "Pending", value: dashboardData.pendingcount, fill: "#f59e0b" },
    { name: "Deleted", value: dashboardData.deletingcount, fill: "#ef4444" }
  ];

  const blogStatusData = [
    { name: "Verified", value: dashboardData.verifiedcount, fill: "#10b981" },
    { name: "Pending", value: dashboardData.pendingcount, fill: "#f59e0b" },
    { name: "Deleted", value: dashboardData.deletingcount, fill: "#ef4444" }
  ];

  const trendData = [
    { month: "Jan", users: 20, blogs: 15 },
    { month: "Feb", users: 35, blogs: 28 },
    { month: "Mar", users: 45, blogs: 38 },
    { month: "Apr", users: 52, blogs: 45 },
    { month: "May", users: 68, blogs: 62 },
    { month: "Jun", users: dashboardData.usercount, blogs: dashboardData.blogcount }
  ];

  return (
    <div className="admin-users-wrapper">
      {/* Header */}
      <div className="admin-page-header">
        <div className="header-content">
          <h1 className="page-title">Analytics & Reports</h1>
          <p className="page-subtitle">Comprehensive insights into platform performance</p>
        </div>
        <div className="header-actions">
          <button className="btn-modern btn-secondary" onClick={fetchData}>
            <RefreshCw size={16} />
            Refresh
          </button>
          <button className="btn-modern btn-secondary">
            <Calendar size={16} />
            Date Range
          </button>
          <div className="export-dropdown">
            <button className="btn-modern btn-primary dropdown-toggle">
              <Download size={16} />
              Export Report
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={() => handleExport('pdf')}>
                <span>📄</span> Export as PDF
              </button>
              <button className="dropdown-item" onClick={() => handleExport('excel')}>
                <span>📊</span> Export as Excel
              </button>
              <button className="dropdown-item" onClick={() => handleExport('csv')}>
                <span>📈</span> Export as CSV
              </button>
              <button className="dropdown-item" onClick={() => handleExport('charts')}>
                <span>🖼️</span> Export Charts Only
              </button>
              <button className="dropdown-item" onClick={() => handleExport('email')}>
                <span>📧</span> Email Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading analytics...</p>
        </div>
      ) : (
        <>
          {/* KPI Cards */}
          <div className="reports-kpi-grid">
            <div className="kpi-card">
              <div className="kpi-icon users">
                <Users size={24} />
              </div>
              <div className="kpi-content">
                <div className="kpi-value">{dashboardData.usercount}</div>
                <div className="kpi-label">Total Users</div>
                <div className="kpi-change positive">+12% from last month</div>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon blogs">
                <FileText size={24} />
              </div>
              <div className="kpi-content">
                <div className="kpi-value">{dashboardData.blogcount}</div>
                <div className="kpi-label">Total Blogs</div>
                <div className="kpi-change positive">+8% from last month</div>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon verified">
                <CheckCircle size={24} />
              </div>
              <div className="kpi-content">
                <div className="kpi-value">{dashboardData.verifiedcount}</div>
                <div className="kpi-label">Verified Blogs</div>
                <div className="kpi-change positive">+15% from last month</div>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon pending">
                <Clock size={24} />
              </div>
              <div className="kpi-content">
                <div className="kpi-value">{dashboardData.pendingcount}</div>
                <div className="kpi-label">Pending Reviews</div>
                <div className="kpi-change negative">-5% from last month</div>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="reports-charts-grid">
            {/* Bar Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3>Platform Overview</h3>
                <p>Statistical breakdown of key metrics</p>
              </div>
              <div className="chart-content">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: '#64748b' }}
                      axisLine={{ stroke: '#e2e8f0' }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: '#64748b' }}
                      axisLine={{ stroke: '#e2e8f0' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <h3>Blog Status Distribution</h3>
                <p>Verification status breakdown</p>
              </div>
              <div className="chart-content">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={blogStatusData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={40}
                      paddingAngle={5}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Line Chart */}
            <div className="chart-card full-width">
              <div className="chart-header">
                <h3>Growth Trends</h3>
                <p>User and blog growth over time</p>
              </div>
              <div className="chart-content">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="month" 
                      tick={{ fontSize: 12, fill: '#64748b' }}
                      axisLine={{ stroke: '#e2e8f0' }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: '#64748b' }}
                      axisLine={{ stroke: '#e2e8f0' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="blogs" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Reports;