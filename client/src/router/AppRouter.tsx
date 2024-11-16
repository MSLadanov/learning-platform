import App from "@/App";
import ErrorRoute from "@/components/ErrorPage/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { SignIn } from "@/components/SignIn/SignIn";
import { SignUp } from "@/components/SignUp/SignUp";
import { ForgotPassword } from "@/components/ForgotPassword/ForgotPassword";
import { ReactElement } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      { path: "/", element: <Navigate to="/signin" replace /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
    ],
  },
]);

export const AppRouter = (): ReactElement => {
  return <RouterProvider router={router} />;
};