import { useQuery } from "@tanstack/react-query";
import MyBooksDataRow from "../../../components/Dashboard/TableRows/MyBooksDataRow";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyBooks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-books`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <>
      <div>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead className="sticky">
                    <tr>
                      <th className="px-6  py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-center text-sm uppercase font-semibold tracking-wider whitespace-nowrap w-1/3">
                        image
                      </th>

                      <th className="px-6 py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-center text-sm uppercase font-semibold tracking-wider whitespace-nowrap w-1/3">
                        book name
                      </th>

                      <th className="px-6 py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-center text-sm uppercase font-semibold tracking-wider whitespace-nowrap w-1/3">
                        Status
                      </th>
                      <th className="px-6 py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-center text-sm uppercase font-semibold tracking-wider whitespace-nowrap w-1/3">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {books.map((book) => (
                      <MyBooksDataRow
                        key={book._id}
                        book={book}
                        refetch={refetch}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBooks;
