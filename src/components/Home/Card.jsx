import { Link } from "react-router";

const Card = ({ book }) => {
  const {
    image,
    category,
    price,
    quantity,
    description,
    status,
    author,
    name,
    _id,
  } = book;

  return (
    <div className="bg-white w-full max-w-xs mx-auto rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="h-60 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#023E8A] mb-1">{name}</h2>
          <p className="text-sm text-gray-600 mb-1">Author: {author}</p>
          <p className="text-sm text-gray-500 mb-2 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-[#0077B6] font-medium px-2 py-1 border border-[#0077B6] rounded-full">
            {category}
          </span>
          <span className="font-semibold text-[#0077B6]">${price}</span>
        </div>

        <p className="text-sm text-gray-400 mt-1">Available: {quantity}</p>

        {status && (
          <div className="mt-3">
            <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full font-semibold text-sm">
              {status}
            </span>
          </div>
        )}

        {/* DETAILS BUTTON */}
        <div className="mt-4">
          <Link
            to={`/books/${_id}`}
            className="block text-center w-full py-1 bg-[#48CAE4] hover:bg-[#0077B6] text-[#023E8A] font-semibold rounded-lg shadow transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
