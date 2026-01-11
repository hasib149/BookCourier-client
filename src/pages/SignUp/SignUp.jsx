import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { imageUpload, saveOrUpdateUser } from "../../../Utilites";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const onSubmit = async (data) => {
    const { password, email, image, name } = data;
    const imgFile = image[0];

    try {
      const imageURL = await imageUpload(imgFile);

      const result = await createUser(email, password);
      await saveOrUpdateUser({ name, email, image: imageURL });
      await updateUserProfile(name, imageURL);

      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });
      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-8 bg-[#CAF0F8]">
      <div className="flex flex-col w-full max-w-md p-8 rounded-3xl bg-white shadow-xl">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-[#023E8A]">
            Create Account
          </h1>
          <p className="text-sm text-[#1F2933] mt-2">Join BookCurier today!</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* NAME */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#023E8A]">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-[#0077B6] rounded-xl bg-[#CAF0F8] text-[#023E8A] focus:ring-2 focus:ring-[#48CAE4] outline-none"
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 20, message: "Name too long" },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* IMAGE */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#023E8A]">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-[#023E8A] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#48CAE4] file:text-white hover:file:bg-[#0077B6] bg-[#CAF0F8] border border-dashed border-[#0077B6] rounded-xl cursor-pointer"
              {...register("image", { required: "Profile image required" })}
            />
            <p className="mt-1 text-xs text-[#0077B6]">
              PNG, JPG, JPEG (max 2MB)
            </p>
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#023E8A]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-[#0077B6] rounded-xl bg-[#CAF0F8] text-[#023E8A] focus:ring-2 focus:ring-[#48CAE4] outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#023E8A]">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 border border-[#0077B6] rounded-xl bg-[#CAF0F8] text-[#023E8A] focus:ring-2 focus:ring-[#48CAE4] outline-none"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
                  message: "Password must be strong",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-[#48CAE4] hover:bg-[#0077B6] text-[#023E8A] font-bold rounded-xl shadow-lg transition-colors flex justify-center items-center"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin text-xl" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* OR DIVIDER */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-[#0077B6]"></div>
          <p className="px-4 text-sm text-[#023E8A]">Or continue with</p>
          <div className="flex-1 h-px bg-[#0077B6]"></div>
        </div>

        {/* GOOGLE SIGN IN */}
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3 border border-[#0077B6] py-2 rounded-xl hover:bg-[#0077B6] hover:text-white transition-colors font-semibold text-[#023E8A]"
        >
          <FcGoogle size={24} /> Continue with Google
        </button>

        {/* LOGIN LINK */}
        <p className="text-center mt-6 text-sm text-[#1F2933]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0077B6] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
