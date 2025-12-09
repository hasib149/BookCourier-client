import useAuth from "../../../hooks/useAuth";
import coverImg from "../../../assets/images/cover.jpg";
import { useState } from "react";
import UpdateProfileModal from "../../../components/Modal/UpdateProfileModal";

const Profile = () => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <img
          alt="cover photo"
          src={coverImg}
          className="w-full mb-4 rounded-t-lg h-56"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-blue-500 rounded-full">
            Customer
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            <span className="text-blue-500">User Id:</span> {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex  items-center justify-between text-sm text-gray-600 ">
              <div className="">
                <p className="flex flex-col ">
                  <span className="text-blue-500">Name</span>
                  <span className="font-bold text-gray-600 ">
                    {user?.displayName}
                  </span>
                </p>
                <p className="flex flex-col pt-2">
                  <span className="text-blue-500">Email</span>
                  <span className="font-bold text-gray-600 ">
                    {user?.email}
                  </span>
                </p>
              </div>
              <div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-blue-500  px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-blue-800 block mb-1"
                >
                  Update Profile
                </button>

                <UpdateProfileModal closeModal={closeModal} isOpen={isOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
