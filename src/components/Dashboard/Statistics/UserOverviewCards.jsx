import React from "react";
import { Link } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ===================
// Overview Cards Data
// ===================
const cards = [
  {
    title: "Total Orders",
    value: 18,
    icon: "📦",
    bg: "bg-blue-50",
    text: "text-blue-900",
    iconBg: "bg-blue-100",
  },
  {
    title: "Ongoing Deliveries",
    value: 3,
    icon: "🚚",
    bg: "bg-orange-50",
    text: "text-orange-600",
    iconBg: "bg-orange-100",
  },
  {
    title: "Delivered Orders",
    value: 12,
    icon: "✅",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    title: "Pending Orders",
    value: 2,
    icon: "⏳",
    bg: "bg-sky-50",
    text: "text-sky-700",
    iconBg: "bg-sky-100",
  },
];

// ===================
// Chart Data
// ===================
const orderChartData = [
  { name: "Delivered", orders: 12 },
  { name: "Ongoing", orders: 3 },
  { name: "Pending", orders: 2 },
  { name: "Cancelled", orders: 1 },
];

export default function UserDashboardOverview() {
  return (
    <div className="space-y-8">
      {/* =====================
          Overview Cards
      ====================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl p-5 shadow-sm border border-slate-100 ${card.bg}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{card.title}</p>
                <h2 className={`text-3xl font-bold mt-1 ${card.text}`}>
                  {card.value}
                </h2>
              </div>

              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl text-xl ${card.iconBg}`}
              >
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =====================
          Chart + Summary
      ====================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">
            Order Status Overview
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={orderChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="orders"
                  fill="#3B82F6"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Summary Box */}
        <div className="bg-blue-50 rounded-2xl p-6 border flex flex-col">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Quick Summary
          </h3>

          <ul className="space-y-3 text-sm text-slate-700 flex-1">
            <li>📦 Total Orders: <b>18</b></li>
            <li>🚚 Active Deliveries: <b>3</b></li>
            <li>✅ Successfully Delivered: <b>12</b></li>
            <li>⏳ Pending Approval: <b>2</b></li>
          </ul>

          <Link
            to="my-orders"
            className="mt-6 text-center bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            View All Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
