const Statistics = () => {
  const stats = [
    { value: "120K+", label: "Books Delivered" },
    { value: "30K+", label: "Happy Readers" },
    { value: "64", label: "Cities Covered" },
    { value: "500+", label: "Partners" },
  ];

  return (
    <section className="py-16 px-6 mx-auto w-11/12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#023E8A] text-center mb-12">
        Our Impact
      </h2>
      <div className="grid md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-4xl font-bold text-[#0077B6] mb-2">
              {stat.value}
            </h3>
            <p className="text-[#1F2933]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
