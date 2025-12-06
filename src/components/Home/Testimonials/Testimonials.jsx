import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section class="bg-blue-50 py-16">
        <div class="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-16">
            What Our Readers Are <span className="text-sky-600">Saying</span>
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <p class="mb-4 text-gray-700">
                “BookCourier delivers fast and the books always arrive in
                perfect condition. Highly recommended!”
              </p>
              <h3 class="font-semibold text-blue-800">– Sarah K.</h3>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <p class="mb-4 text-gray-700">
                “I found rare books here that I couldn’t get anywhere else.
                Great service!”
              </p>
              <h3 class="font-semibold text-blue-800">– Ahmed R.</h3>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <p class="mb-4 text-gray-700">
                “Excellent customer support and very fast delivery. My go-to
                book courier!”
              </p>
              <h3 class="font-semibold text-blue-800">– Priya S.</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
