import React from "react";

const ReviewCard = ({ reviewdata }) => {
  const { rating, author, bookname } = reviewdata;

  return (
    <div className="max-w-sm mx-auto bg-linear-to-br from-blue-200 via-blue-300 to-blue-400 shadow-xl p-6 rounded-3xl border  transform hover:scale-105 transition-transform duration-300 border-none relative">
      {/* Rating */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-yellow-300 font-bold text-lg">
          {"⭐".repeat(Math.round(rating))}
        </span>
        <span className="font-semibold text-sm">{rating} / 5</span>
      </div>

      <div className="border-t border-dashed border-blue-400 my-4"></div>

      {/* Book Info */}
      <div className="flex flex-col gap-2 text-center">
        <h4 className="text-xl font-bold">{bookname}</h4>
        <p className=" text-sm">by {author}</p>
      </div>

      {/* Decorative Circle */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full opacity-10"></div>
    </div>
  );
};

export default ReviewCard;
