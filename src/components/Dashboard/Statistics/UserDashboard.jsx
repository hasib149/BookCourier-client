import UserOverviewCards from "./UserOverviewCards";

function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#F0F9FF] p-6">
      <h1 className="text-2xl font-semibold text-blue-900 mb-6">
        User Dashboard
      </h1>

      <UserOverviewCards />
    </div>
  );
}

export default UserDashboard;
