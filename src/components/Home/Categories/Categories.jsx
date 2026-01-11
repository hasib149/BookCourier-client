const Categories = () => {
  const categories = [
    "Academic",
    "Fiction",
    "Comics",
    "Children",
    "Romance",
    "Fantasy",
    "Islamic",
    "Horror",
    "Mystery",
    "True Crime",
    "Self-Help",
    "Biography",
  ];

  return (
    <section className="py-20 px-6 w-11/12 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#023E8A] text-center mb-12">
        Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-6 py-3 bg-[#48CAE4] text-white rounded-full font-semibold hover:bg-[#0077B6] transition-colors"
          >
            {cat}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Categories;
