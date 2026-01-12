import React from "react";
import { Link } from "react-router";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// ===================
// Overview Cards
// ===================
const overviewCards = [
  {
    title: "Assigned Orders",
    value: 42,
    icon: "📦",
    color: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Picked Today",
    value: 18,
    icon: "📤",
    color: "bg-sky-50 text-sky-700",
  },
  {
    title: "Delivered Today",
    value: 21,
    icon: "✅",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Pending Actions",
    value: 3,
    icon: "⏳",
    color: "bg-amber-50 text-amber-700",
  },
];

// ===================
// Status Chart
// ===================
const statusData = [
  { name: "Delivered", value: 21 },
  { name: "In Transit", value: 18 },
  { name: "Pending", value: 3 },
];

const COLORS = ["#10B981", "#3B82F6", "#F59E0B"];

export default function LibrarianOverview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Librarian Dashboard
        </h1>
        <p className="text-sm text-slate-500">Today’s operational overview</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {overviewCards.map((card, i) => (
          <div
            key={i}
            className={`p-5 rounded-xl border hover:shadow-md transition ${card.color}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">{card.title}</p>
                <h2 className="text-3xl font-bold mt-1">{card.value}</h2>
              </div>
              <span className="text-3xl">{card.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Status Chart + Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <h3 className="font-semibold text-slate-700 mb-4">
            Today Order Status
          </h3>

          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={4}
                >
                  {statusData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Notes / Actions */}
        <div className="lg:col-span-2 bg-indigo-50 rounded-2xl p-6 border">
          <h3 className="font-semibold text-indigo-900 mb-3">
            Today’s Priority
          </h3>

          <ul className="space-y-3 text-sm text-slate-700">
            <li>🔹 Verify pending pickups</li>
            <li>🔹 Assign delivery riders</li>
            <li>🔹 Resolve failed deliveries</li>
            <li>🔹 Update order statuses</li>
          </ul>

          <Link
            to="orders"
            className="mt-6 inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Go to Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
