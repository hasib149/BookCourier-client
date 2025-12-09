import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";

const CustomerOrderDataRow = ({ order }) => {
  const {
    _id,
    bookname,
    orderedAt,
    order_status,
    email,
    payment_status,
    price,
  } = order;
  const { user } = useAuth();

  // Cancel Order
  const handleCancel = async () => {
    await axios.patch(`${import.meta.env.VITE_API_URL}/cancel-order/${_id}`);
    toast.success("Order Cancelled!");
  };

  // payment
  const handlePayment = async () => {
    try {
      const paymentInfo = {
        bookId: _id,
        bookname,
        orderedAt,
        email,
        order_status,
        payment_status,
        quantity: 1,
        price: Number(price), 
        customer: {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
        },
      };
      // POST request to backend
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-checkout-session`,
        paymentInfo
      );
      if (data?.url) {
        window.location.href = data.url; 
      } else {
        console.error("Checkout URL not found:", data);
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">{bookname}</td>

      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        {new Date(orderedAt).toLocaleDateString()}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm">{price}</td>

      <td className="px-5 py-5 border-b border-gray-200 text-sm capitalize">
        {order_status}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 text-sm capitalize">
        {payment_status}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 text-sm">
        {/* Cancel Button (Only Pending + Not Paid) */}
        {order_status === "pending" && payment_status !== "paid" ? (
          <button
            onClick={handleCancel}
            className="px-3 py-1 bg-red-500 text-white rounded mr-2"
          >
            Cancel
          </button>
        ) : order_status === "cancelled" ? (
          <span className="px-3 py-1 bg-gray-400 text-white rounded">
            Cancelled
          </span>
        ) : null}

        {/* Pay Now Button (Only Pending + Unpaid) */}
        {order_status === "pending" && payment_status === "unpaid" && (
          <Link
            onClick={handlePayment}
            // to={`/payment/${_id}`}
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
