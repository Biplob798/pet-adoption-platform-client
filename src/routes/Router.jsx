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
import AddPet from "../pages/dashboard/usersDashboard/addPet/AddPet";
import MyAddPets from "../pages/dashboard/usersDashboard/myAddPets/MyAddPets";
import AdoptionRequest from "../pages/dashboard/usersDashboard/adoptionRequest/AdoptionRequest";
import CreateDonationCamping from "../pages/dashboard/usersDashboard/createDonationCamping/CreateDonationCamping";
import MyDonationCamping from "../pages/dashboard/usersDashboard/myDonationCamping/MyDonationCamping";
import MyDonation from "../pages/dashboard/usersDashboard/myDonation/MyDonation";
import UpdatePet from "../pages/dashboard/componet/UpdatePet";
import UserHome from "../pages/dashboard/usersDashboard/userHome/UserHome";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";

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
          fetch(
            `https://pet-adoption-platform-server-eight.vercel.app/campings/${params.id}`
          ),
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
      // user route
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      {
        path: "updateItem/:id",
        element: <UpdatePet></UpdatePet>,
        loader: ({ params }) =>
          fetch(
            `https://pet-adoption-platform-server-eight.vercel.app/pet/${params.id}`
          ),
      },
      {
        path: "addPet",
        element: <AddPet></AddPet>,
      },
      {
        path: "myAddPets",
        element: <MyAddPets></MyAddPets>,
      },
      {
        path: "adoptionRequest",
        element: <AdoptionRequest></AdoptionRequest>,
      },
      {
        path: "createDonationCamping",
        element: <CreateDonationCamping></CreateDonationCamping>,
      },
      {
        path: "myDonationCamping",
        element: <MyDonationCamping></MyDonationCamping>,
      },
      {
        path: "myDonation",
        element: <MyDonation></MyDonation>,
      },
      // admin route
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "allPets",
        element: <AllPets></AllPets>,
      },

      {
        path: "allDonation",
        element: <AllDonation></AllDonation>,
      },
      {
        path: "additionalInfo",
        element: <AdditionalInfo></AdditionalInfo>,
      },
    ],
  },
]);

export default router;
