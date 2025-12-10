import { useQuery } from "@tanstack/react-query";
import CustomerOrderDataRow from "../../../components/Dashboard/TableRows/CustomerOrderDataRow";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-orders`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-8">
      <div className="py-6 sm:py-10">
        <div className="overflow-x-auto shadow-md rounded-lg border border-blue-200">
          <table className="min-w-full divide-y divide-blue-200">
            <thead className="bg-sky-200">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider">
                  Book Title
                </th>

                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider">
                  Order Date
                </th>

                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider">
                  Price
                </th>

                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider">
                  Processing
                </th>

                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider">
                  Status
                </th>

                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-blue-100">
              {orders.map((order) => (
                <CustomerOrderDataRow
                  key={order._id}
                  order={order}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
