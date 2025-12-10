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

      {role === "Customer" && <MyOrders></MyOrders>}
      {role === "Librarian" && <Orders></Orders>}
      {role === "Admin" && <AllUser />}
    </div>
  );
};

export default Statistics;
