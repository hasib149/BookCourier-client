import React from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UsersDataRow = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { role, email, last_loggedIn, name, _id } = user;
  //   make liberian
  const handleLibrarian = async () => {
    await axiosSecure.patch(`/userRole/${_id}`);
    toast.success(" User promoted to Librarian successfully!");
    refetch();
  };
  //   make admin
  const handleAdmin = async () => {
    await axiosSecure.patch(`/userRoles/${_id}`);
    toast.success(" User promoted to Librarian successfully!");
    refetch();
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{role}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{last_loggedIn}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={handleLibrarian}
            className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Make Librarian
          </button>

          <button
            onClick={handleAdmin}
            className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Make Admin
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UsersDataRow;
