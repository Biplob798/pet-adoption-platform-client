import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../pages/home/home/Home";
import PetListing from "../pages/petListing/PetListing";
import DonationCampings from "../pages/donationCampings/DonationCampings";
import Login from "../pages/logIn/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path:'/',
      element:<Home></Home>
    },
      {
      path:'/petListing',
      element:<PetListing></PetListing>
    },
      {
      path:'/donationCampings',
      element:<DonationCampings></DonationCampings>
    },
      {
      path:'/login',
      element:<Login></Login>
    },
      {
      path:'/',
      element:<Home></Home>
    },
  ]
  },
]);

export default router;
