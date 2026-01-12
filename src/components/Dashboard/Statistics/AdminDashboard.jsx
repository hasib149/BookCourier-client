// import React, { useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

// ===================
// Overview Cards
// ===================
const overviewCards = [
  {
    title: "Total Orders",
    value: 2450,
    icon: "📦",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Active Deliveries",
    value: 132,
    icon: "🚚",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    title: "Delivered",
    value: 2015,
    icon: "✅",
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    title: "Revenue",
    value: "৳ 3,45,000",
    icon: "💰",
    gradient: "from-purple-500 to-purple-700",
  },
];

// ===================
// Charts Data
// ===================
const barData = [
  { name: "Dhaka", orders: 820 },
  { name: "Chittagong", orders: 540 },
  { name: "Sylhet", orders: 310 },
  { name: "Rajshahi", orders: 420 },
];

const pieData = [
  { name: "Delivered", value: 2015 },
  { name: "Ongoing", value: 132 },
  { name: "Pending", value: 180 },
  { name: "Cancelled", value: 123 },
];

const lineData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 61000 },
  { month: "Apr", revenue: 70000 },
  { month: "May", revenue: 67000 },
];

const pieColors = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"];

export default function AdminDashboard() {
  // const [filter, setFilter] = useState("Monthly");

  return (
    <div className="space-y-10">
      {/* =====================
          Header + Filter
      ====================== */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>

        {/* <div className="flex gap-2">
          {["Today", "Weekly", "Monthly"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition
                ${
                  filter === f
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
            >
              {f}
            </button>
          ))}
        </div> */}
      </div>

      {/* =====================
          Overview Cards
      ====================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewCards.map((card, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl text-white bg-gradient-to-r ${card.gradient}
            shadow-md hover:shadow-xl transform hover:-translate-y-1 transition`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">{card.title}</p>
                <h2 className="text-3xl font-bold mt-1">{card.value}</h2>
              </div>
              <span className="text-4xl opacity-90">{card.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* =====================
          Charts Section
      ====================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm lg:col-span-2">
          <h3 className="font-semibold text-slate-700 mb-4">Orders by City</h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={{ fill: "#f1f5f9" }} />
                <Bar dataKey="orders" fill="#3B82F6" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-4">Order Status</h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={4}
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={pieColors[index]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* =====================
          Line Chart
      ====================== */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h3 className="font-semibold text-slate-700 mb-4">
          Monthly Revenue Trend
        </h3>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#6366F1"
                strokeWidth={3}
                activeDot={{ r: 7 }}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
