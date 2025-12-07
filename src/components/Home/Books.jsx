import Card from "./Card";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Books = () => {
  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/books`);
      return result.data;
    },
  });
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <Container>
      {books && books.length > 0 ? (
        <div className="pt-12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-8">
          {books.map((book) => (
            <Card key={book._id} book={book} />
          ))}
        </div>
      ) : (
        "books not found"
      )}
    </Container>
  );
};

export default Books;
