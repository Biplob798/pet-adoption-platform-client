import {
  FaCampground,
  FaCodePullRequest,
  FaRegAddressBook,
  FaRegAddressCard,
  FaUsers,
} from "react-icons/fa6";
import { FaDonate, FaHome, FaInfoCircle } from "react-icons/fa";
import { FcDonate } from "react-icons/fc";
import { MdOutlinePets } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";
import usePets from "../hooks/usePets";

const Dashboard = () => {
  const [pets] = usePets();
  const isAdmin = true;
  return (
    <div className="flex">
      {/*dashboard sidebar  */}
      <div className="w-64 min-h-screen bg-gray-300">
        {/* all user   */}
        <ul className="listing space-y-3 p-2">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome />
                 Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allPets">
                  <MdOutlinePets />
                  All Pets
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allDonation">
                  <FaDonate />
                  All donation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additionalInfo">
                  <FaInfoCircle />
                  Additional Info
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addPet">
                  <FaRegAddressCard /> Add a Pet
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaRegAddressBook />
                  My Add Pets- {pets.length}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adoptionRequest">
                  <FaCodePullRequest />
                  Adoption Request
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/createDonationCamping">
                  <FaDonate />
                  Create Donation Camping
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myDonationCamping">
                  <FaCampground />
                  My Donation Camping
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myDonation">
                  <FcDonate />
                  My Donation
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {/* shared navBer */}
        <div className="divider"></div>
        <ul className="listing  space-y-3 p-2">
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard  */}
      <div className="flex-1 p-8 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
