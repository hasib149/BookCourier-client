import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { imageUpload } from "../../../../Utilites";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EditBook = () => {
  const axiosSecure = useAxiosSecure();

  const { id } = useParams();
  const { data: book = {} } = useQuery({
    queryKey: ["books", id],
    queryFn: async () => {
      const result = await axiosSecure(`/editBooks/${id}`);
      return result.data;
    },
  });
  const { register, handleSubmit, reset } = useForm({});
  useEffect(() => {
    if (book && Object.keys(book).length > 0) {
      reset({
        title: book.name,
        author: book.author,
        category: book.category,
        status: book.status,
        description: book.description,
        price: book.price,
      });
    }
  }, [book, reset]);

  //   put
  const {
    isLoading,
    mutateAsync,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (paylod) =>
      await axiosSecure.put(`/book-edit/${id}`, paylod),
    onSuccess: (data) => {
      console.log(data);
      mutationReset();
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

  const onSubmit = async (data) => {
    const { title, author, status, description, price, category, image } = data;

    let imageURL = book.image;
    if (image && image.length > 0) {
      try {
        const imageFile = image[0];
        imageURL = await imageUpload(imageFile);
      } catch (error) {
        console.log("Image upload error:", error);
      }
    }

    const bookData = {
      image: imageURL,
      name: title,
      author,
      status,
      description,
      price: Number(price),
      category,
    };

    try {
      await mutateAsync(bookData);
      toast.success("Book updated successfully");
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6 bg-blue-50 rounded-xl max-w-md mx-auto">
      <h2 className="text-3xl text-blue-700 font-semibold mb-4">
        Edit Your Book Information
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Book Name */}
        <label className="text-blue-500 font-medium">Book Name</label>
        <input
          type="text"
          {...register("title")}
          className="p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
        />

        {/* Author */}
        <label className="text-blue-500 font-medium">Author</label>
        <input
          type="text"
          {...register("author")}
          className="p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
        />

        {/* Image */}
        <label className="text-blue-500 font-medium">Image URL</label>
        <input
          type="file"
          {...register("image")}
          className="file-input w-full file-input-primary"
        />

        {/* Category */}
        <label className="text-blue-500 font-medium">Category</label>
        <input
          type="text"
          {...register("category")}
          className="p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
        />
        {/* price */}
        <label className="text-blue-500 font-medium">Price</label>
        <input
          type="number"
          {...register("price")}
          className="p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
        />

        {/* Status */}
        <label className="text-blue-500 font-medium">Status</label>
        <input
          type="text"
          {...register("status")}
          className="p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
        />

        {/* Description */}
        <label className="text-blue-500 font-medium">Description</label>
        <textarea
          {...register("description")}
          className="p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
