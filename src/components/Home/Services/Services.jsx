const Services = () => {
  const services = [
    "Home Delivery",
    "Bulk Shipping",
    "COD Available",
    "Publisher Support",
  ];

  return (
    <section className="py-12 px-6 mx-auto w-11/12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#023E8A] text-center mb-12">
        Our Services
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service}
            className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#48CAE4] hover:shadow-2xl transition-shadow duration-300"
          >
            <p className="text-[#023E8A] font-semibold text-center">
              {service}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
