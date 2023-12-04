import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { MdOutlinePets } from "react-icons/md";
import usePets from "../../../hooks/usePets";
import logo from "../../../assets/logo.jpg";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [pets] = usePets();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navTitles = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="petListing">Pet Listing</NavLink>
      </li>
      <li>
        <NavLink to="donationCampings">Donation Campings </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/dashboard/cart">
              <button className="btn">
                <MdOutlinePets />

                <div className="badge badge-secondary">+{pets.length}</div>
              </button>
            </Link>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 max-w-screen-lg bg-black bg-opacity-40 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  w-52"
          >
            {navTitles}
          </ul>
        </div>
        <Link to="/">
          <img className="hidden lg:block w-16" src={logo} alt="" />
        </Link>
        <a className="btn btn-ghost text-white text-lg hidden lg:block">
          Pet Adoption
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex justify-center items-center text-white px-1">
          {navTitles}
        </ul>
      </div>

      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end mr-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-[14px] z-[2] p-2 shadow  menu-sm dropdown-content  md:w-[600%] rounded-box border bg-black bg-opacity-80  border-[#16CAC9]"
            >
              <li>
                <p className="font-bold text-lg w-full mr-5 text-blue-400 ">
                  {user?.displayName}
                </p>
              </li>
              <li>
                <p className="font-bold text-base w-full mr-5 text-blue-400">
                  {user?.email}
                </p>
              </li>
              <hr />
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-lg mr-5 text-[#4a4641]"
                      : "text-[#d8e3e3] text-lg font-semibold mr-5 hover:text-[#a9a299]"
                  }
                  to="dashboard"
                >
                  DashBoard
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="w-full bg-[#16CAC9] mt-2 font-bold text-white text-lg mr-5"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <p>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " border-b-2 border-[#a48966] font-bold mr-5 pb-1 text-[#F99615]"
                  : " font-bold mr-5 hover:text-[#272827] hover:border-b-2 hover:border-[#84e09c] text-[#9716ca] hover:pb-1 duration-150"
              }
              to="/login"
            >
              LogIn
            </NavLink>
          </p>
        )}
      </div>
    </div>
  );
};

export default NavBar;
