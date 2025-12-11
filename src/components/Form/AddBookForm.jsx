import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { imageUpload } from "../../../Utilites";
import LoadingSpinner from "../Shared/LoadingSpinner";
import ErrorPage from "../../pages/ErrorPage";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddBookForm = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    isError,
    mutateAsync,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (paylod) => await axiosSecure.post(`/books`, paylod),
    onSuccess: (data) => {
      console.log(data);
      // show toast
      toast.success("Book Added successfully");
      // navigate to my inventory page
      mutationReset();
      // Query key invalidate
    },
    onError: (error) => {
      console.log(error);
    },
    onMutate: (payload) => {
      console.log("I will post this data--->", payload);
    },
    onSettled: (data, error) => {
      console.log("I am from onSettled--->", data);
      if (error) console.log(error);
    },
    retry: 3,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const {
      name,
      author,
      status,
      description,
      quantity,
      price,
      category,
      image,
    } = data;
    const imageFile = image[0];

    try {
      const imageURL = await imageUpload(imageFile);
      const bookData = {
        image: imageURL,
        name,
        author,
        status,
        description,
        quantity: Number(quantity),
        price: Number(price),
        category,
        Librarian: {
          image: user?.photoURL,
          name: user?.displayName,
          email: user?.email,
        },
      };
      await mutateAsync(bookData);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  if (isPending) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;

  return (
    <section className="min-h-screen bg-linear-to-br from-blue-100 via-sky-100 to-blue-200 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-blue-200">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Add a New Book
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Book Name */}
          <div>
            <label className="block text-blue-800 font-semibold mb-1">
              Book Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter book name"
              className="w-full p-3 border rounded-lg border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">Book name is required</p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-blue-800 font-semibold mb-2">
              Book Image
            </label>

            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              className="file-input file-input-bordered file-input-info w-full border-blue-300 focus:ring-2 focus:ring-blue-500"
            />

            {errors.image && (
              <p className="text-red-600 text-sm mt-1">Image is required</p>
            )}
          </div>

          {/* Author Name */}
          <div>
            <label className="block text-blue-800 font-semibold mb-1">
              Author
            </label>
            <input
              type="text"
              {...register("author", { required: true })}
              placeholder="Author name"
              className="w-full p-3 border rounded-lg border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.author && (
              <p className="text-red-600 text-sm mt-1">
                Author name is required
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-blue-800 font-semibold mb-1">
              Category
            </label>
            <input
              type="text"
              {...register("category")}
              placeholder="Fiction, Science, Mystery..."
              className="w-full p-3 border rounded-lg border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-blue-800 font-semibold mb-1">
              Price
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price "
              className="w-full p-3 border rounded-lg border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.price && (
              <p className="text-red-600 text-sm mt-1">Price is required</p>
            )}
          </div>
          {/* quantity */}
          <div>
            <label className="block text-blue-800 font-semibold mb-1">
              Price
            </label>
            <input
              type="number"
              {...register("quantity", { required: true })}
              placeholder="quantity "
              className="w-full p-3 border rounded-lg border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.price && (
              <p className="text-red-600 text-sm mt-1">quantity is required</p>
            )}
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-blue-800 font-semibold mb-1">
              Status
            </label>
            <select
              {...register("status")}
              className="w-full p-3 border rounded-lg border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="published">Published</option>
              <option value="unpublished">Unpublished</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-blue-800 font-semibold mb-1">
              Description
            </label>
            <textarea
              rows="4"
              {...register("description")}
              placeholder="Write a short book description..."
              className="w-full p-3 border rounded-lg border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-linear-to-r from-blue-500 to-sky-500 text-white font-semibold rounded-xl hover:opacity-90 transition"
          >
            Add Book
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddBookForm;
