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
import Dashboard from "../layOut/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AllPets from "../pages/dashboard/allPets/AllPets";
import AllDonation from "../pages/dashboard/allDonation/AllDonation";
import AdditionalInfo from "../pages/dashboard/additionalInfo/AdditionalInfo";

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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // admin route 
      {
        path: 'allUsers',
        element:<AllUsers></AllUsers>
      },
      {
        path: 'allPets',
        element:<AllPets></AllPets>
      },
     
      {
        path: 'allDonation',
        element:<AllDonation></AllDonation>
      },
      {
        path: 'additionalInfo',
        element:<AdditionalInfo></AdditionalInfo>
      },
    ],
  },
]);

export default router;
