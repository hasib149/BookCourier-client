import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-16">
            What Our Readers Are <span className="text-sky-600">Saying</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="mb-4 text-gray-700">
                “BookCourier delivers fast and the books always arrive in
                perfect condition. Highly recommended!”
              </p>
              <h3 className="font-semibold text-blue-800">– Sarah K.</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="mb-4 text-gray-700">
                “I found rare books here that I couldn’t get anywhere else.
                Great service!”
              </p>
              <h3 className="font-semibold text-blue-800">– Ahmed R.</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="mb-4 text-gray-700">
                “Excellent customer support and very fast delivery. My go-to
                book courier!”
              </p>
              <h3 className="font-semibold text-blue-800">– Priya S.</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
