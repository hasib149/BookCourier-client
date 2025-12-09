import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const MyBooksDataRow = ({ book }) => {
  console.log(book);
  const { image, name, status, _id } = book;
  const handleCancel = async () => {
    await axios.patch(`${import.meta.env.VITE_API_URL}/status-update/${_id}`);
    toast.success(`${name}, unpublished successfully!`);
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
          className="bg-blue-400 py-2 text-white px-3 rounded-lg mr-2"
        >
          Edit
        </Link>

        <button
          onClick={handleCancel}
          className="bg-blue-400 py-2 text-white px-3 rounded-lg"
        >
          Unpublished
        </button>
      </td>
    </tr>
  );
};

export default MyBooksDataRow;
