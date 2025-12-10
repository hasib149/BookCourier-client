import React from "react";
import Plants from "../../components/Home/Books";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const AllBooks = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 mb-2 text-center">
        All Books Are Here
      </h1>
      <Plants />
    </div>
  );
};

export default AllBooks;
