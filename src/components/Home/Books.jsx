import { useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { useForm } from "react-hook-form";

const Books = () => {
  const { register, handleSubmit } = useForm();
  const [searchText, setSearchText] = useState("");

  // ALL BOOK FATCH
  const { data: books = [], isLoading: isBooksLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
      return result.data;
    },
  });

  // SEARCH
  const {
    data: filteredBooks = [],
    isLoading: isSearching,
    refetch: refetchSearch,
  } = useQuery({
    queryKey: ["searchBooks", searchText],
    queryFn: async () => {
      if (!searchText) return books;
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/search`, {
        params: { search: searchText },
      });
      return result.data;
    },
    enabled: false,
  });

  const onSubmit = (data) => {
    setSearchText(data.searchfield);
    refetchSearch();
  };

  if (isBooksLoading || isSearching) return <LoadingSpinner />;

  return (
    <Container>
      <div>
        {/* search form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-center gap-1.5 mb-8"
        >
          <label className="flex items-center border-2 border-green-500 rounded-lg px-3 py-2 w-full max-w-sm focus-within:ring-1 focus-within:ring-green-400">
            <svg
              className="h-5 w-5 text-green-500 mr-2 opacity-70"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="search"
              {...register("searchfield")}
              required
              placeholder="Search"
              className="flex-1 outline-none bg-transparent"
            />
          </label>
          <button
            className="
              px-5 py-2 
              bg-white text-green-700 
              font-semibold 
              rounded-lg 
              border border-green-600
              shadow-sm 
              transition-all duration-300
              hover:bg-green-700 hover:text-white 
              hover:border-green-700
              hover:-translate-y-0.5
            "
          >
            Search
          </button>
        </form>

        {/* books grid */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(searchText ? filteredBooks : books).length > 0 ? (
            (searchText ? filteredBooks : books).map((book) => (
              <Card key={book._id} book={book} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Books not found
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Books;
