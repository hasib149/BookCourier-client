import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserDataRow = ({ book, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { category, price, status, name, image, _id } = book;
  // handle unpublish
  const handlePublished = async () => {
    await axiosSecure.patch(`/userstatus/${_id}`);
    toast.success(" User status unpublished to published successfully!");
    refetch();
  };

  // handle published
  const handleUnpublished = async () => {
    await axiosSecure.patch(`/userstatusunpublish/${_id}`);
    toast.success(" User status published to unpublished successfully!");
    refetch();
  };

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/booksupdate/${_id}`);

          if (res.data.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Book has been deleted.",
              icon: "success",
            });

            refetch();
          }
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete book",
            icon: "error",
          });
        }
      }
    });
  };

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
          {status === "published" ? (
            <button
              onClick={handleUnpublished}
              className="btn w-full sm:w-auto border border-blue-600 hover:bg-blue-500 hover:text-white"
            >
              Unpublish
            </button>
          ) : (
            <button
              onClick={handlePublished}
              className="btn w-full sm:w-auto border border-blue-600 hover:bg-blue-500 hover:text-white"
            >
              Publish
            </button>
          )}
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={handleDelete}
          className="btn w-full sm:w-auto border border-red-600 hover:bg-red-600 hover:text-white"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default UserDataRow;
