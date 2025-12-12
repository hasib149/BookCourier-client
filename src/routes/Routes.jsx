import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageUsers from "../pages/Dashboard/Admin/ManageBooks";
import Profile from "../pages/Dashboard/Common/Profile";
import Statistics from "../pages/Dashboard/Common/Statistics";
import MainLayout from "../layouts/MainLayout";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import { createBrowserRouter } from "react-router";
import AllBooks from "../pages/AllBooks/AllBooks";
import AddBook from "../pages/Dashboard/Librarian/AddBook";
import BookDetails from "../pages/PlantDetails/BookDetails";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import MyBooks from "../pages/Dashboard/Librarian/MyBooks";
import Invoices from "../pages/Dashboard/Customer/Invoices/Invoices";
import EditBook from "../pages/Dashboard/Librarian/EditBook";
import Orders from "../pages/Dashboard/Librarian/Orders";
import AllUser from "../pages/Dashboard/Admin/AllUser";
import MyWishList from "../pages/Dashboard/Customer/MyWishList/MyWishList";
import LiberianRoute from "./LiberianRoute";
import ManageBooks from "../pages/Dashboard/Admin/ManageBooks";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "add-book",
        element: (
          <PrivateRoute>
            <LiberianRoute>
              <AddBook />
            </LiberianRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-books",
        element: (
          <PrivateRoute>
            <LiberianRoute>
              <MyBooks />
            </LiberianRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-wishlist",
        element: (
          <PrivateRoute>
            <MyWishList />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-books",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageBooks></ManageBooks>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUser />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <PrivateRoute>
            <LiberianRoute>
              <EditBook />
            </LiberianRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "invoices",
        element: (
          <PrivateRoute>
            <Invoices />
          </PrivateRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <LiberianRoute>
              <Orders />
            </LiberianRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
