import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import LoadingSpinner from "../../../../components/Shared/LoadingSpinner";
import Wishlistcard from "./Wishlistcard";

const MyWishList = () => {
  const { user } = useAuth();
  const { data: wishlists = {}, isLoading } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/wishlist/${user?.email}`
      );
      return result.data;
    },
  });
  console.log(wishlists);
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="bg-blue-50 min-h-screen py-10">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Your Wishlist
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlists.map((wishlist) => (
          <Wishlistcard
            key={wishlist._id}
            wishlist={wishlist}
            className="shadow-lg bg-white rounded-xl border border-blue-200 hover:shadow-2xl transition"
          />
        ))}
      </div>
    </div>
  );
};

export default MyWishList;
