import { useQuery } from "@tanstack/react-query";
import SellerOrderDataRow from "../../../components/Dashboard/TableRows/SellerOrderDataRow";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const Orders = () => {
  const { user } = useAuth();
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/allOrders/${user?.email}`
      );
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <h2 className="text-3xl text-center font-semibold text-blue-700 mb-6">
            All Orders Are Here
          </h2>

          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full  rounded-lg overflow-hidden border border-blue-100">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-sky-200">
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      Customer
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      Price
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      Address
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      Status
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-blue-100">
                  {orders.map((order) => (
                    <SellerOrderDataRow
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

export default Orders;
