import UpdateUserRoleModal from "../../Modal/UpdateUserRoleModal";

const UserDataRow = ({ book }) => {
  console.log(book);
  const { category, price, status, name, image } = book;
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 mx-auto object-cover rounded"
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="">{category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="">{price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="">{status}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Publish
          </button>

          <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Unpublish
          </button>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button className="px-3 py-1 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">
          delete
        </button>
      </td>
    </tr>
  );
};

export default UserDataRow;
