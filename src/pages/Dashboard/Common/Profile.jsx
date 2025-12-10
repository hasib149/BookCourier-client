import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import UpdateProfileModal from "../../../components/Modal/UpdateProfileModal";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const Profile = () => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const { user } = useAuth();
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
<div className="flex justify-center items-center min-h-screen bg-linear-to-r from-blue-50 to-blue-100">
  <div className="bg-white shadow-2xl rounded-3xl p-6 max-w-sm w-full relative text-center">
    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
      <img src={user?.photoURL} alt="profile" className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg" />
    </div>
    <div className="mt-20">
      <p className="px-4 py-1 bg-blue-500 text-white rounded-full text-md">{role}</p>
      <h2 className="mt-2 text-2xl font-semibold">{user?.displayName}</h2>
      <p className="text-gray-700">{user?.email}</p>
      <p className="text-gray-600 text-xs mt-1">User ID: {user?.uid}</p>
      <button onClick={() => setIsOpen(true)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-full">Update Profile</button>
    </div>
    <UpdateProfileModal closeModal={closeModal} isOpen={isOpen} />
  </div>
</div>
  );
};

export default Profile;
