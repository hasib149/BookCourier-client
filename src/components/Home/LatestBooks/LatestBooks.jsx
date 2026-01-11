import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import Card from "../Card";
import Container from "../../Shared/Container";

const LatestBooks = () => {
  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books-limit"],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/books-limit`
      );
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023E8A]  mt-12">
        Newest Book
      </h2>
      {books && books.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <Card key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-center text-blue-500 text-lg font-medium py-10">
          Books not found
        </p>
      )}
    </Container>
  );
};

export default LatestBooks;
