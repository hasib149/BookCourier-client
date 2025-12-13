import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../../Utilites";

const UpdateProfileModal = ({ closeModal, isOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const { user, updateUserProfile } = useAuth();

  const onSubmit = async (data) => {
    console.log("Updated Profile:", data);
    const { name, profileImage } = data;
    let uploadedImageUrl = user?.photoURL;

    if (profileImage && profileImage.length > 0) {
      uploadedImageUrl = await imageUpload(profileImage[0]);
    }

    await updateUserProfile(name, uploadedImageUrl);
    
    closeModal();
    reset();
  };

  return (
    <div>
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
              className="w-full max-w-md bg-white p-6 backdrop-blur-2xl 
              duration-300 ease-out data-closed:transform-[scale(95%)] 
              data-closed:opacity-0 shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                className="text-lg font-semibold text-center leading-6 py-4 text-blue-500"
              >
                Update your Profile
              </DialogTitle>

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-4 space-y-4"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-blue-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    defaultValue={user?.displayName}
                    placeholder="Enter full name"
                    className="mt-1 w-full rounded-md border border-gray-300 p-2 
                    focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Profile Image */}
                <div>
                  <label className="block text-sm font-medium text-blue-500">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    {...register("profileImage")}
                    className="mt-1 w-full rounded-md border file-input file-input-primary"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-between pt-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 duration-200"
                  >
                    Update
                  </button>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default UpdateProfileModal;
