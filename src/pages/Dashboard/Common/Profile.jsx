import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import UpdateProfileModal from "../../../components/Modal/UpdateProfileModal";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const { user } = useAuth();
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex justify-center items-start p-6 bg-[#E0F7FA] dark:bg-black">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl pt-20 pb-8 px-6 text-center">
        {/* Avatar (position-free) */}
        <div className="flex justify-center -mt-20">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src={user?.photoURL || "/default-avatar.png"}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Role Badge */}
        <div className="mt-4 mb-3">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-md">
            {role || "User"}
          </span>
        </div>

        {/* User Info */}
        <h1 className="text-2xl font-bold text-gray-900">
          {user?.displayName}
        </h1>
        <p className="text-gray-700 mt-1">{user?.email}</p>
        <p className="text-gray-500 text-xs mt-1">User ID: {user?.uid}</p>

        {/* Update Profile Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all"
        >
          Update Profile
        </button>

        {/* Extra Info Section */}
        <div className="mt-8 text-left bg-gray-50 p-5 rounded-2xl shadow-inner">
          <h2 className="font-semibold text-gray-800 mb-3">Account Details</h2>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Email:</span> {user?.email}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">UID:</span> {user?.uid}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Role:</span> {role || "User"}
          </p>
        </div>

        {/* Modal */}
        <UpdateProfileModal closeModal={closeModal} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Profile;
