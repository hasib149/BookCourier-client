const About = () => {
  return (
    <div className=" text-[#1F2933] ">
      {/* Hero Section */}
      <section className=" text-white bg-accent py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">About BookCourier</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Delivering books with care, trust, and speed.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* Who We Are */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-[#023E8A] mb-4">
            Who We Are
          </h2>
          <p>
            <span className="text-[#0077B6] font-medium">BookCourier</span> is a
            dedicated book delivery platform connecting readers, bookstores, and
            publishers through fast, reliable, and secure courier services. We
            treat every book with the care it deserves.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#48CAE4]">
            <h3 className="text-xl font-semibold text-[#023E8A] mb-3">
              Our Mission
            </h3>
            <p>
              To make book delivery simple, affordable, and trustworthy for
              everyone while ensuring timely and damage-free delivery.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#48CAE4]">
            <h3 className="text-xl font-semibold text-[#023E8A] mb-3">
              Our Vision
            </h3>
            <p>
              To become the most trusted book delivery partner by helping spread
              knowledge and stories without boundaries.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-[#023E8A] mb-6">
            What We Do
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-[#48CAE4] text-xl">📦</span>
              Safe & secure book delivery
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#48CAE4] text-xl">🚚</span>
              Fast nationwide shipping
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#48CAE4] text-xl">🏬</span>
              Courier solutions for bookstores & publishers
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#48CAE4] text-xl">📚</span>
              Special handling for valuable books
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#0077B6] text-white rounded-xl p-10">
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose BookCourier
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/10 p-5 rounded-lg">
              Book-focused delivery system
            </div>
            <div className="bg-white/10 p-5 rounded-lg">
              Careful packaging & tracking
            </div>
            <div className="bg-white/10 p-5 rounded-lg">
              Affordable & reliable service
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
