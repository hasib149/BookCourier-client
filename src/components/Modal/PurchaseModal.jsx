import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../Shared/LoadingSpinner";

const PurchaseModal = ({ closeModal, isOpen, book }) => {
  console.log(book);
  const { user } = useAuth();

  const {
    isPending,
    mutateAsync,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (order) =>
      await axios.post(`${import.meta.env.VITE_API_URL}/customer-order`, order),
    onSuccess: () => {
      toast.success("Order added successfully!");
      mutationReset();
      closeModal();
    },
    onError: (err) => console.log(err),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { address, Phone, email, name, bookname, price } = data;
    console.log(data);

    try {
      const orderData = {
        address,
        Phone,
        email,
        name,
        bookname,
        productId: book._id,
        price: Number(price),
        librarian: {
          image: book?.Librarian?.image,
          name: book?.Librarian?.name,
          email: book?.Librarian?.email,
        },
      };
      await mutateAsync(orderData);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  if (isPending) return <LoadingSpinner />;

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out shadow-xl rounded-2xl"
          >
            <DialogTitle
              as="h3"
              className="text-lg font-medium text-center leading-6 text-blue-700 mb-4"
            >
              Place Your Order
            </DialogTitle>

            {/* FORM START */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <label className="block mb-2 text-blue-600 font-semibold">
                Name
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="w-full p-2 border rounded mb-1 bg-gray-100"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mb-3">Name is required</p>
              )}

              {/* Email */}
              <label className="block mb-2 text-blue-600 font-semibold">
                Email
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                className="w-full p-2 border rounded mb-1 bg-gray-100"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mb-3">Email is required</p>
              )}
              {/* book-name */}
              <label className="block mb-2 text-blue-600 font-semibold">
                Book Name
              </label>
              <input
                type="text"
                defaultValue={book?.name}
                readOnly
                className="w-full p-2 border rounded mb-1 bg-gray-100"
                {...register("bookname", { required: true })}
              />
              {errors.bookname && (
                <p className="text-red-600 text-sm mb-3">
                  bookname is required
                </p>
              )}
              {/* Price */}
              <label className="block mb-2 text-blue-600 font-semibold">
                Price
              </label>
              <input
                type="number"
                defaultValue={book?.price}
                readOnly
                className="w-full p-2 border rounded mb-1 bg-gray-100"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-red-600 text-sm mb-3">price is required</p>
              )}

              {/* Phone */}
              <label className="block mb-2 text-blue-600 font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-2 border rounded mb-1"
                {...register("Phone", { required: true })}
              />
              {errors.Phone && (
                <p className="text-red-600 text-sm mb-3">
                  Phone number is required
                </p>
              )}

              {/* Address */}
              <label className="block mb-2 text-blue-600 font-semibold">
                Address
              </label>
              <textarea
                placeholder="Enter your address"
                className="w-full p-2 border rounded mb-1"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <p className="text-red-600 text-sm mb-3">Address is required</p>
              )}

              {/* Buttons */}
              <div className="flex mt-4 justify-around">
                <button
                  type="submit"
                  className="btn hover:bg-blue-500 hover:text-white border border-blue-600"
                >
                  Place Order
                </button>
                <button
                  type="button"
                  className="btn hover:bg-red-500 hover:text-white border border-red-600"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PurchaseModal;
