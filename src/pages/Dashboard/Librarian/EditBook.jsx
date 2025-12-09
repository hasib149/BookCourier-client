import React from "react";

const EditBook = () => {
    
  return (
    <div className="p-6 bg-blue-50 rounded-xl max-w-md mx-auto">
      <h2 className="text-3xl text-blue-700 font-semibold mb-4">
        Edit Your Book Information
      </h2>
      <form  className="flex flex-col gap-4">
        <label className="text-blue-500 font-medium">Book Name</label>
        <input
          type="text"
          name="foodName"
          defaultValue="gf"
          placeholder="Food Name"
          className="p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
        />

        <label className="text-blue-500 font-medium">Restaurant Name</label>
        <input
          type="text"
          name="restaurantName"
          defaultValue="gh"
          placeholder="Restaurant Name"
          className="p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
        />

        <label className="text-blue-500 font-medium">Food Image URL</label>
        <input
          type="text"
          name="foodImage"
          defaultValue="hg"
          placeholder="Food Image URL"
          className="p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
        />

        <label className="text-blue-500 font-medium">Review Date</label>
        <input
          type="text"
          name="reviewDate"
          defaultValue="fhg"
          className="p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
