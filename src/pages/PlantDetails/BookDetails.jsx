import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const BookDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  // Book fetch
  const { data: book = {}, isLoading } = useQuery({
    queryKey: ["books", id],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/books/${id}`
      );
      return result.data;
    },
  });

  const {
    _id,
    image,
    category,
    price,
    quantity,
    description,
    name,
    Librarian,
  } = book;

  // Reviews fetch
  const { data: reviews = [], refetch: refetchReviews } = useQuery({
    queryKey: ["reviews", _id],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/reviews/${_id}`
      );
      return res.data;
    },
    enabled: !!_id,
  });

  // Average rating fetch
  const { data: ratingData = { averageRating: 0, totalReviews: 0 } } = useQuery(
    {
      queryKey: ["rating", _id],
      queryFn: async () => {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/rating/${_id}`
        );
        return res.data;
      },
      enabled: !!_id,
    }
  );

  console.log(user);
  // Review form
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, {
      bookId: _id,
      // userId: "jf",
      userName: user?.displayName,
      rating: Number(data.rating),
      review: data.review,
    });
    reset();
    refetchReviews();
  };

  // wishlist
  const addToWishlist = async () => {
    if (!user) {
      toast.error("Please log in to add to wishlist");
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/wishlist`, {
        useremail: user?.email,
        bookId: book._id,
        bookname: book.name,
        image: book.image,
        category: book.category,
        price: book.price,
        quantity: book.quantity,
        description: book.description,
        status: book.status,
        author: book.author,
      });
      toast.success("Book added to wishlist");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  const closeModal = () => setIsOpen(false);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12">
        {/* Book Image */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="w-full h-96 overflow-hidden rounded-xl">
            <img
              className="object-cover w-full h-full"
              src={image}
              alt={name}
            />
          </div>
        </div>

        {/* Book Info */}
        <div className="md:gap-10 flex-1">
          <Heading title={name} subtitle={`Category: ${category}`} />
          <hr className="my-6" />
          <div className="text-lg font-light ">{description}</div>
          <hr className="my-6" />

          <div className="text-xl font-semibold flex flex-row items-center gap-2">
            <div>Librarian: {Librarian?.name}</div>
            <img
              className="rounded-full"
              height="30"
              width="30"
              alt="Avatar"
              referrerPolicy="no-referrer"
              src={Librarian?.image}
            />
          </div>
          <hr className="my-6" />
          <div>
            <p className="gap-4 font-light ">
              Quantity: {quantity} Units Left Only!
            </p>
          </div>
          <hr className="my-6" />
          <div className="flex justify-between">
            <p className="font-bold text-3xl ">Price: {price}$</p>
            <div className="flex gap-6">
              <button
                className="btn hover:bg-blue-500 hover:text-white border border-blue-600"
                onClick={() => setIsOpen(true)}
              >
                Order Now
              </button>
              <button
                className="btn hover:bg-blue-500 hover:text-white border border-blue-600"
                onClick={addToWishlist}
              >
                Add to Wishlist
              </button>
              {/* <Button onClick={() => setIsOpen(true)} label="Order Now" /> */}
              {/* <Button onClick={() => setIsOpen(true)} label="Add To Wishlist" /> */}
            </div>
          </div>
          <hr className="my-6" />

          <PurchaseModal book={book} closeModal={closeModal} isOpen={isOpen} />

          {/* Average Rating */}
          <div className="mt-6">
            <p className="font-semibold">
              Average Rating: {ratingData.averageRating.toFixed(1)} ⭐ (
              {ratingData.totalReviews} reviews)
            </p>
          </div>

          {/* Add Review Form */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">Add Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <select
                {...register("rating")}
                className="border p-2 rounded w-full"
              >
                <option value="5">5 Star</option>
                <option value="4">4 Star</option>
                <option value="3">3 Star</option>
                <option value="2">2 Star</option>
                <option value="1">1 Star</option>
              </select>
              <textarea
                {...register("review")}
                placeholder="Write your review..."
                className="border p-2 w-full rounded mt-2"
              ></textarea>
              <button
                type="submit"
                className="btn mt-3 hover:bg-blue-500 hover:text-white border border-blue-600"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Reviews List */}
          <div className="mt-8">
            <h2 className="text-xl font-bold">Reviews ({reviews.length})</h2>
            {reviews.map((rev) => (
              <div key={rev._id} className="border p-3 my-2 rounded-lg">
                <p>⭐ {rev.rating} / 5</p>
                <p>
                  {rev.userName}: {rev.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookDetails;
