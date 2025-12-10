import React from "react";
import UsersDataRow from "../../../components/Dashboard/TableRows/UsersDataRow";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const AllUser = () => {
  const {
    data: users = [],
    isLoading,
  } = useQuery({
    queryKey: ["users", ],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/alluser`
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
            All Users Are Here{" "}
          </h2>

          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full  rounded-lg overflow-hidden border border-blue-100">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-sky-200">
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      User
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      User name
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      Role
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      last_loggedIn
                    </th>
                    <th className="px-5 py-3 border-b border-blue-100 text-blue-700 text-left text-sm uppercase font-medium">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-blue-100">
                  {users.map((user) => (
                    <UsersDataRow key={user._id} user={user} />
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

export default AllUser;
