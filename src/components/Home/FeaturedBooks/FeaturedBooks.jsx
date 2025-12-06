import React from "react";
import {
  FaShippingFast,
  FaBookOpen,
  FaHeadset,
  FaGift,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";

const FeaturedBooks = () => {
  return (
    <section className="bg-lineart-to-r from-sky-100 via-blue-50 to-sky-200 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">
          Why <span className="text-sky-600">Readers Love Us</span>
        </h2>
        <p className=" mb-12 max-w-2xl mx-auto">
          We prioritize our readers and their experience. Here’s what makes
          BookCourier special.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <FaShippingFast className="text-blue-700 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Fast Delivery
            </h3>
            <p className="">
              Get your books delivered quickly and reliably right to your
              doorstep.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <FaBookOpen className="text-blue-700 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Huge Collection
            </h3>
            <p className="">
              Explore thousands of books across genres, languages, and authors.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <FaHeadset className="text-blue-700 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              24/7 Support
            </h3>
            <p className="">
              Our dedicated support team is always ready to assist you with any
              query.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <FaGift className="text-blue-700 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Special Offers
            </h3>
            <p className="">
              Enjoy exclusive discounts and offers for our valued readers.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <FaStar className="text-blue-700 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Top Quality Books
            </h3>
            <p className="">
              Only high-quality books from trusted publishers and authors.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <FaThumbsUp className="text-blue-700 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Trusted by Readers
            </h3>
            <p className="">
              Thousands of satisfied readers rely on us for their book needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
