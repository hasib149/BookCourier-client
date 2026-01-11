import { Link, Navigate, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { saveOrUpdateUser } from "../../../Utilites";

const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const { user } = await signIn(email, password);
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });
      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (user) return <Navigate to={from} replace={true} />;

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });
      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err?.message);
    }
  };

  // Demo Login button handler
  const handleDemoCustomerLogin = () => {
    setValue("email", "customer@gmail.com");
    setValue("password", "1234asAS?");
  };
  // Demo Login button handler
  const handleDemoLibrarianLogin = () => {
    setValue("email", "liberian@gmail.com");
    setValue("password", "1234asAS?");
  };
  // Demo Login button handler
  const handleDemoAdminLogin = () => {
    setValue("email", "admin@gmail.com");
    setValue("password", "1234asAS?");
  };

  return (
    <div className="flex justify-center items-center bg-[#CAF0F8] min-h-screen py-10">
      <div className="flex flex-col w-full max-w-md p-8 rounded-3xl bg-white shadow-xl">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-[#023E8A]">
            Welcome Back
          </h1>
          <p className="text-sm text-[#1F2933] mt-2">
            Sign in to access your BookCurier account
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-[#023E8A]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-[#0077B6] rounded-xl text-[#023E8A] focus:ring-2 focus:ring-[#48CAE4] outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-[#023E8A]">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 border border-[#0077B6] rounded-xl text-[#023E8A] focus:ring-2 focus:ring-[#48CAE4] outline-none"
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

          <button
            type="submit"
            className="w-full py-3 bg-[#48CAE4] hover:bg-[#0077B6] text-[#023E8A] font-bold rounded-xl shadow-lg transition-colors flex justify-center items-center"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin text-xl" />
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Demo Login Button */}
        <button
          onClick={handleDemoCustomerLogin}
          className="w-full mt-4 py-3 bg-[#ADE8F4] hover:bg-[#0077B6] text-[#023E8A] font-bold rounded-xl shadow-lg transition-colors"
        >
          Demo Customer Login
        </button>
        <button
          onClick={handleDemoLibrarianLogin}
          className="w-full mt-4 py-3 bg-[#ADE8F4] hover:bg-[#0077B6] text-[#023E8A] font-bold rounded-xl shadow-lg transition-colors"
        >
          Demo Liberian Login
        </button>
        <button
          onClick={handleDemoAdminLogin}
          className="w-full mt-4 py-3 bg-[#ADE8F4] hover:bg-[#0077B6] text-[#023E8A] font-bold rounded-xl shadow-lg transition-colors"
        >
          Demo Admin Login
        </button>

        <div className="text-right mt-2">
          <button className="text-xs text-[#0077B6] hover:underline">
            Forgot password?
          </button>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-[#0077B6]"></div>
          <p className="px-4 text-sm text-[#023E8A]">Or continue with</p>
          <div className="flex-1 h-px bg-[#0077B6]"></div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3 border border-[#0077B6] py-2 rounded-xl hover:bg-[#0077B6] hover:text-white transition-colors font-semibold text-[#023E8A]"
        >
          <FcGoogle size={24} /> Continue with Google
        </button>

        <p className="text-center mt-6 text-sm text-[#1F2933]">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#0077B6] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
