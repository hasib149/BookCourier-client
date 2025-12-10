import React from "react";

const UsersDataRow = ({ user }) => {
  console.log(user);
  const { role, email, last_loggedIn, name } = user;

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
          <button className="px-3 py-0.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Make Librarian
          </button>

          <button className="px-3 py-.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Make Admin
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UsersDataRow;
