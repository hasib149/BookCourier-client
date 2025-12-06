import React from "react";

const WhyChooseBookCourier = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          Why Choose <span className="text-sky-600">BookCourier?</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          BookCourier brings books to your doorstep with unmatched speed,
          reliability, and affordability. We ensure you get your favorite books
          easily, safely, and without any hassle.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1 */}
          <div className="p-8 bg-white shadow-lg rounded-2xl border border-blue-100 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              We prioritize quick delivery across the country so you get your
              books on time.
            </p>
          </div>

          {/* 2 */}
          <div className="p-8 bg-white shadow-lg rounded-2xl border border-blue-100 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Lowest Price Guarantee
            </h3>
            <p className="text-gray-600">
              Original books at lower prices—no hidden fees, no extra charges.
            </p>
          </div>

          {/* 3 */}
          <div className="p-8 bg-white shadow-lg rounded-2xl border border-blue-100 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Huge Book Collection
            </h3>
            <p className="text-gray-600">
              Thousands of books—new arrivals, bestsellers, classics, and rare
              titles.
            </p>
          </div>

          {/* 4 */}
          <div className="p-8 bg-white shadow-lg rounded-2xl border border-blue-100 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Secure Packaging
            </h3>
            <p className="text-gray-600">
              Every book is carefully packed so it reaches you without any
              damage.
            </p>
          </div>

          {/* 5 */}
          <div className="p-8 bg-white shadow-lg rounded-2xl border border-blue-100 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Easy Replacement
            </h3>
            <p className="text-gray-600">
              Wrong book or damaged copy? Get quick and easy replacement without
              hassle.
            </p>
          </div>

          {/* 6 */}
          <div className="p-8 bg-white shadow-lg rounded-2xl border border-blue-100 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Trusted by Thousands
            </h3>
            <p className="text-gray-600">
              Thousands of readers trust BookCourier for reliable book delivery
              every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBookCourier;
