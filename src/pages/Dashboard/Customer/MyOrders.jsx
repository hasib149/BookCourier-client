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

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-left text-sm uppercase font-semibold tracking-wider">
                      Book Title
                    </th>

                    <th className="px-5 py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-left text-sm uppercase font-semibold tracking-wider">
                      Order Date
                    </th>

                    <th className="px-5 py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-left text-sm uppercase font-semibold tracking-wider">
                      Processing
                    </th>
                    <th className="px-5 py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-left text-sm uppercase font-semibold tracking-wider">
                      Status
                    </th>

                    <th className="px-5 py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-left text-sm uppercase font-semibold tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
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
      </div>
    </>
  );
};

export default MyOrders;
