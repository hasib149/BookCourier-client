import AdminDashboard from "../../../components/Dashboard/Statistics/AdminDashboard";
import LibrarianOverview from "../../../components/Dashboard/Statistics/LibrarianOverview";
import UserDashboard from "../../../components/Dashboard/Statistics/UserDashboard";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useRole from "../../../hooks/useRole";
import AllUser from "../Admin/AllUser";
import MyOrders from "../Customer/MyOrders";
import Orders from "../Librarian/Orders";
const Statistics = () => {
  const [role, isRoleLoading] = useRole();
  if (isRoleLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      {/* <AdminStatistics /> */}

      {role === "customer" && <UserDashboard></UserDashboard>}
      {role === "librarian" && <LibrarianOverview></LibrarianOverview>}
      {role === "admin" && <AdminDashboard></AdminDashboard>}
    </div>
  );
};

export default Statistics;
