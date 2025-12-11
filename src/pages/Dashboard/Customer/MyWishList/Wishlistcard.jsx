import React from "react";

const Wishlistcard = ({ wishlist }) => {
  const {
    image,
    bookname,
    description,
    category,
    price,
    quantity,
    author,
    status,
  } = wishlist;
  return (
    <div>
      <div className="card bg-white w-80 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <figure className="h-60 w-full overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-bold text-blue-800">
            {bookname}
          </h2>
          <p className="text-sm text-gray-500 mb-2">Author: {author}</p>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="badge badge-outline text-blue-600">
              Category: {category}
            </span>
            <span className="font-semibold text-blue-800">${price}</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Available: {quantity}</p>
          <div className="card-actions justify-end mt-3">
            {status && <span className="badge badge-success">{status}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlistcard;
