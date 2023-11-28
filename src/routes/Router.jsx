import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../pages/home/home/Home";
import PetListing from "../pages/petListing/PetListing";
import DonationCampings from "../pages/donationCampings/DonationCampings";
import Login from "../pages/logIn/Login";
import Error from "../pages/error/Error";
import SignUp from "../pages/signUp/SignUp";
import DonationDetails from "../pages/donationDetails/DonationDetails";
import RecommendedSection from "../components/recommendedSection/RecommendedSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/petListing",
        element: <PetListing></PetListing>,
      },
      {
        path: "/donationCampings",
        element: <DonationCampings></DonationCampings>,
      },
      {
        path: "/recommendedSection",
        element: <RecommendedSection></RecommendedSection>,
      },
      {
        path: "/donationDetails/:id",
        element: <DonationDetails></DonationDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campings/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
