import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyBooksDataRow = ({ book, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { image, name, status, _id } = book;
  const handleUnpublished = async () => {
    await axiosSecure.patch(`/status-update/${_id}`);
    toast.success(`${name}, unpublished successfully!`);
    refetch();
  };

  return (
    <tr>
      <td className="px-6 py-4 border-b border-gray-200 text-center text-sm whitespace-nowrap w-1/3">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 mx-auto object-cover rounded"
        />
      </td>

      <td className="px-6 py-4 border-b border-gray-200 text-center text-sm whitespace-nowrap w-1/3">
        {name}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-center text-sm whitespace-nowrap w-1/3">
        {status}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-center text-sm whitespace-nowrap w-1/3">
        <Link
          to={`/dashboard/edit-book/${book._id}`}
          className="btn w-full mr-1.5 sm:w-auto border border-blue-600 hover:bg-blue-500 hover:text-white"
        >
          Edit
        </Link>

        <button
          onClick={handleUnpublished}
          className="btn w-full sm:w-auto border border-blue-600 hover:bg-blue-500 hover:text-white"
        >
          Unpublished
        </button>
      </td>
    </tr>
  );
};

export default MyBooksDataRow;
