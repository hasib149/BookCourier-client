import { useQuery } from "@tanstack/react-query";
import UserDataRow from "../../../components/Dashboard/TableRows/UserDataRow";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const ManageBooks = () => {
  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/adminbooks`
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
            All Books Are Here{" "}
          </h2>

          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full  rounded-lg overflow-hidden border border-blue-100">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-sky-200">
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      book image
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      book name
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      category
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      price
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      status
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      Action
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-blue-100">
                  {books.map((book) => (
                    <UserDataRow key={book._id} book={book} refetch={refetch} />
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

export default ManageBooks;
