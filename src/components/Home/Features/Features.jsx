const Features = () => {
  const features = [
    { title: "Secure Packaging", icon: "📦" },
    { title: "Live Tracking", icon: "🚚" },
    { title: "Fast Delivery", icon: "⏱️" },
  ];

  return (
    <section className="py-16 px-6 w-11/12 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#023E8A] text-center mb-12">
        Features
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-2">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-[#1F2933]">
              Designed to protect and deliver books safely and quickly.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
