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
import { NewPassword } from "@/components/NewPassword/NewPassword";
import { ReactElement, ReactNode } from "react";
import CoursesPage from "@/components/CoursesPage/CoursesPage";
import ProtectedRouteError from "@/components/ProtectedRouteError/ProtectedRouteError";
import Cookies from "js-cookie";

const ProtectedRoute = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const token = Cookies.get("authToken");
  return token ? <>{children}</> : <ProtectedRouteError />;
};
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
      { path: "newpassword", element: <NewPassword /> },
      {
        path: "courses",
        element: (
          <ProtectedRoute>
            <CoursesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "mycourses",
        element: (
          <ProtectedRoute>
            <CoursesPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export const AppRouter = (): ReactElement => {
  return <RouterProvider router={router} />;
};
