import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router";

const CustomerOrderDataRow = ({ order }) => {
  const { _id, bookname, orderedAt, order_status, email, payment_status } =
    order;
  const queryClient = useQueryClient();

  // Cancel Order
  const handleCancel = async () => {
    await axios.patch(`${import.meta.env.VITE_API_URL}/cancel-order/${_id}`);
    toast.success("Order Cancelled!");
    queryClient.setQueryData(["orders", email], (oldData) => {
      if (!oldData) return [];
      return oldData.filter((item) => item._id !== _id);
    });
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">{bookname}</td>

      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        {new Date(orderedAt).toLocaleDateString()}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 text-sm capitalize">
        {order_status}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm capitalize">
        {payment_status}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        {/* Cancel Button (Only Pending + Not Paid) */}
        {order_status === "pending" && payment_status !== "paid" && (
          <button
            onClick={handleCancel}
            className="px-3 py-1 bg-red-500 text-white rounded mr-2"
          >
            Cancel
          </button>
        )}

        {/* Pay Now Button (Only Pending + Unpaid) */}
        {order_status === "pending" && payment_status === "unpaid" && (
          <Link
            to={`/payment/${_id}`}
            className="px-3 py-1 bg-green-600 text-white rounded"
          >
            Pay Now
          </Link>
        )}

        {/* Paid Badge */}
        {payment_status === "paid" && (
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded">
            Paid
          </span>
        )}
      </td>
    </tr>
  );
};

export default CustomerOrderDataRow;
