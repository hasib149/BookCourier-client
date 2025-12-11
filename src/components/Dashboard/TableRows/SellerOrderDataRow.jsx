import Swal from "sweetalert2";
import DeleteModal from "../../Modal/DeleteModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const SellerOrderDataRow = ({ order, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { bookname, email, price, address, order_status, _id } = order || {};
  const updateStatus = async (id, status) => {
    try {
      await axiosSecure.put(`/orders/status/${id}`, {
        status,
      });
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  // order cancel
  const cancelOrder = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.patch(`/orders/cancel/${_id}`);

          Swal.fire({
            title: "Cancelled!",
            text: "The order has been cancelled.",
            icon: "success",
            confirmButtonColor: "#3085d6",
          });

          refetch();
        } catch (error) {
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while cancelling the order.",
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{bookname}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{address}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{order_status}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center gap-2">
          <select
            required
            value={order.order_status}
            onChange={(e) => updateStatus(order._id, e.target.value)}
            className="p-1 border-2 border-blue-300 focus:outline-blue-500 rounded-md text-gray-900  bg-white"
            name="category"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">shipped</option>
            <option value="Delivered">delivered</option>
          </select>
          <button
            // onClick={() => setIsOpen(true)}
            className="relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-2 font-semibold text-white leading-tight"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-red-500   rounded-md"
            ></span>
            <span onClick={cancelOrder} className="relative">
              Cancel
            </span>
          </button>
        </div>
        {/* <DeleteModal
          id={_id}
          refetch={refetch}
          isOpen={isOpen}
          closeModal={closeModal}
        /> */}
      </td>
    </tr>
  );
};

export default SellerOrderDataRow;
