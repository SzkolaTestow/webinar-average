// @flow
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { homePageLoader } from "../pages/HomePage/HomePage";
import ProfilePage, { profileLoader } from "../pages/ProfilePage/ProfilePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { ProfileList, profilesLoader } from "../components/ProfileList";

type Props = {};
const AppRoutes = (props: Props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
      loader: homePageLoader,
      children: [
        { path: "/", element: <ProfileList />, loader: profilesLoader },
        {
          path: "profile/:userId",
          loader: profileLoader,
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
