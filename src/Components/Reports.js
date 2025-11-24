import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Pie,
  PieChart,
} from "recharts";
import "../Assets/Styles/Reports.css";
import axios from "axios";

// Sample data for the chart
const data = [
  {
    name: "Users",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Blogs",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Accepted",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Pendings",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Deletied",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const data01 = [
  {
    name: "Accepted",
    value: 2000,
  },
  {
    name: "Pendings",
    value: 2780,
    fill: "#c7ee2eff",
  },
  {
    name: "deletings",
    value: 2780,
    fill: "#e69382ff",
  },
];

function Reports() {
  const [dashboardData, setdashbordData] = useState({
    usercount: 0,
    blogcount: 0,
    verifiedcount: 0,
    pendingcount: 0,
    deletingcount: 0,
  });
  useEffect(() => {
    axios.get("http://localhost:3000/admin/dashboard").then((result) => {
      setdashbordData(result.data);
    });
  }, []);

  const derivedData = [
    { name: "Users", value: dashboardData.usercount, fill: "#4e94bfff" },
    { name: "Blogs", value: dashboardData.blogcount, fill: "#61505aff" },
    { name: "Verified ", value: dashboardData.verifiedcount, fill: "#3bab39ff" },
    { name: "Pending ", value: dashboardData.pendingcount, fill: "#859a28ff" },
    { name: "Deleted ", value: dashboardData.deletingcount, fill: "#e15437ff" },
  ];

  const derivedData01 = [
    { name: "Accepted", value: dashboardData.verifiedcount, fill: "#7fe565ff" },
    { name: "Pendings", value: dashboardData.pendingcount, fill: "#7d9718ff" },
    { name: "Deletings", value: dashboardData.deletingcount, fill: "#f67157ff" },
  ];

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h1>Analytics Dashboard</h1>
        <p>Comprehensive insights into platform performance and user engagement</p>
      </div>

      <div className="reports-grid">
        {/* Bar Chart Card */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Data Overview</h3>
            <p>Statistical breakdown of key metrics</p>
          </div>
          <div className="chart-content">
            <BarChart width={500} height={350} data={derivedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: '#6c757d' }}
                axisLine={{ stroke: '#dee2e6' }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: '#6c757d' }}
                axisLine={{ stroke: '#dee2e6' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              />
              <Legend />
              <Bar
                dataKey="value"
                fill="#007bff"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </div>
        </div>

        {/* Pie Chart Card */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Blog Status Distribution</h3>
            <p>Visual representation of blog verification status</p>
          </div>
          <div className="chart-content">
            <PieChart width={400} height={300}>
              <Pie
                data={derivedData01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={40}
                paddingAngle={5}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
              />
            </PieChart>
          </div>
        </div>

        {/* Summary Stats Card */}
        <div className="stats-card">
          <div className="chart-header">
            <h3>Quick Stats</h3>
            <p>Key performance indicators at a glance</p>
          </div>
          <div className="stats-content">
            <div className="stat-item">
              <div className="stat-number">{dashboardData.usercount}</div>
              <div className="stat-label">Total Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{dashboardData.blogcount}</div>
              <div className="stat-label">Total Blogs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{dashboardData.verifiedcount}</div>
              <div className="stat-label">Verified Blogs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{dashboardData.pendingcount}</div>
              <div className="stat-label">Pending Blogs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{dashboardData.deletingcount}</div>
              <div className="stat-label">Deleted Blogs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
