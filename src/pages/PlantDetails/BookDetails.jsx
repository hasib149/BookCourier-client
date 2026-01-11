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
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BookDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

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

  // Review form
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, {
      bookId: _id,
      userName: user?.displayName,
      rating: Number(data.rating),
      review: data.review,
    });
    reset();
    refetchReviews();
  };

  // Order check (trogol)
  const { data: trogols = [], refetch } = useQuery({
    queryKey: ["trogol", id, user?.email],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/trogol-review/${id}/${user?.email}`
      );
      return result.data;
    },
    enabled: !!user,
  });

  // Wishlist
  const addToWishlist = async () => {
    if (!user) {
      toast.error("Please log in to add to wishlist");
      return;
    }

    try {
      await axiosSecure.post(`/api/wishlist`, {
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
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  const closeModal = () => setIsOpen(false);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <div className="mx-auto flex flex-col lg:flex-row gap-12 w-full mt-10">
        {/* Book Image */}
        <div className="flex-1">
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Book Info */}
        <div className="flex-1 flex flex-col gap-6">
          <Heading title={name} subtitle={`Category: ${category}`} />
          <hr className="border-[#0077B6]" />

          {/* Description */}
          <p className="text-[#1F2933] font-light text-lg">{description}</p>
          <hr className="border-[#0077B6]" />

          {/* Librarian */}
          <div className="flex items-center gap-3 text-lg font-medium">
            <p>Librarian: {Librarian?.name}</p>
            <img
              src={Librarian?.image}
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <hr className="border-[#0077B6]" />

          {/* Quantity */}
          <p className="text-[#023E8A] font-semibold">
            Quantity: {quantity} Units Left Only!
          </p>
          <hr className="border-[#0077B6]" />

          {/* Price & Actions */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-3xl font-bold text-[#0077B6]">Price: {price}$</p>
            <div className="flex gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="btn px-6 py-2 rounded-lg bg-[#48CAE4] text-[#023E8A] font-semibold hover:bg-[#0077B6] hover:text-white shadow transition-colors"
              >
                Order Now
              </button>
              <button
                onClick={addToWishlist}
                className="btn px-6 py-2 rounded-lg border border-[#0077B6] hover:bg-[#0077B6] hover:text-white shadow transition-colors"
              >
                Add to Wishlist
              </button>
            </div>
          </div>

          <PurchaseModal
            book={book}
            closeModal={closeModal}
            refetch={refetch}
            isOpen={isOpen}
          />

          <hr className="border-[#0077B6]" />

          {/* Reviews Section */}
          {trogols.length > 0 ? (
            <div className="flex flex-col gap-6">
              {/* Average Rating */}
              <p className="font-semibold text-[#023E8A] text-lg">
                Average Rating: {ratingData.averageRating.toFixed(1)} ⭐ (
                {ratingData.totalReviews} reviews)
              </p>

              {/* Add Review Form */}
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-[#0077B6]">
                  Add Your Review
                </h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-3"
                >
                  <select
                    {...register("rating")}
                    className="border border-[#0077B6] p-2 rounded-lg focus:ring-2 focus:ring-[#48CAE4]"
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
                    className="border border-[#0077B6] p-3 rounded-lg focus:ring-2 focus:ring-[#48CAE4]"
                  />
                  <button
                    type="submit"
                    className="btn px-6 py-2 rounded-lg bg-[#48CAE4] text-[#023E8A] font-semibold hover:bg-[#0077B6] hover:text-white shadow transition-colors"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <p className="mt-6 text-red-500 font-semibold">
              You must purchase this book to leave a review.
            </p>
          )}

          {/* Reviews List */}
          <div className="mt-8 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#023E8A]">
              Reviews ({reviews.length})
            </h2>
            {reviews.map((rev) => (
              <div
                key={rev._id}
                className="bg-white border border-[#0077B6] rounded-2xl p-4 shadow hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-[#0077B6]">
                  ⭐ {rev.rating} / 5
                </p>
                <p className="text-[#1F2933]">
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
