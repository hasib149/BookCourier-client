import { useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { useForm } from "react-hook-form";

const Books = () => {
  const { register, handleSubmit, reset } = useForm();
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books", searchText, sortOrder],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/books`, {
        params: { search: searchText, sort: sortOrder },
      });
      return res.data;
    },
  });

  const onSubmit = (data) => {
    setSearchText(data.searchfield);
    reset();
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <div>
        {/* SEARCH + SORT */}
        <div className="flex px-4 flex-col mt-12 md:flex-row justify-between items-center gap-4">
          {/* SEARCH FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center gap-3 w-full max-w-lg"
          >
            <label className="flex items-center border-2 border-[#0077B6] rounded-lg px-3 py-2 w-full  shadow focus-within:ring-1 focus-within:ring-[#48CAE4]">
              <svg
                className="h-5 w-5 text-[#0077B6] mr-2 opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M21 21l-4.3-4.3"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>

              <input
                type="search"
                {...register("searchfield")}
                placeholder="Search books..."
                className="flex-1 outline-none bg-transparent text-[#023E8A]"
              />
            </label>

            <button className="px-6 border-2 border-[#0077B6] py-2 bg-[#48CAE4] text-[#023E8A] rounded-lg font-semibold hover:bg-[#0077B6] hover:text-white transition-colors">
              Search
            </button>
          </form>

          {/* SORT */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border-2 px-3 py-2 rounded-lg text-[#023E8A] border-[#0077B6] shadow  focus:ring-1 focus:ring-[#48CAE4]"
          >
            <option value="asc">Price: Low → High</option>
            <option value="desc">Price: High → Low</option>
          </select>
        </div>

        {/* BOOK LIST */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.length > 0 ? (
            books.map((book) => <Card key={book._id} book={book} />)
          ) : (
            <p className="text-center text-[#1F2933] col-span-full">
              Books not found
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Books;
