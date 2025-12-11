import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import LoadingSpinner from "../../../../components/Shared/LoadingSpinner";
import InvoicesOrderData from "../../../../components/Dashboard/TableRows/InvoicesOrderData";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Invoices = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: invoices = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["invoice", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/invoices`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <div className="container mx-auto px-4 bg-blue-50 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-center text-sm uppercase font-semibold tracking-wider whitespace-nowrap w-1/3">
                      Payment ID
                    </th>

                    <th className="px-6 py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-center text-sm uppercase font-semibold tracking-wider whitespace-nowrap w-1/3">
                      Amount
                    </th>

                    <th className="px-6 py-3 bg-sky-200 border-b border-blue-200 text-blue-700 text-center text-sm uppercase font-semibold tracking-wider whitespace-nowrap w-1/3">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {invoices.map((invoice) => (
                    <InvoicesOrderData
                      key={invoice._id}
                      invoice={invoice}
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
  );
};

export default Invoices;
