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
    <div className="reports-main">
      <div className="reports-heading">REPORTS</div>

      <div className="barchart-head">Bar Chart</div>

      <div className="report-barchart">
        <BarChart width={530} height={450} data={derivedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#72aa86ff" />
        </BarChart>
      </div>

      <div className="piechart">Pie Chart</div>

      <div className="report-pie">
        <PieChart width={730} height={250}>
          <Pie
            data={derivedData01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
            fill="#272466ff"
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default Reports;
