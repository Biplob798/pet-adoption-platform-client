import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { MdOutlinePets } from "react-icons/md";
import usePets from "../../../hooks/usePets";


const NavBar = () => {
  const { user, logOut } = useAuth();
  const [pets]=usePets()
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
      <li>
        <Link to="/">
          <button className="btn">
          <MdOutlinePets />

            <div className="badge badge-secondary">+{pets.length}</div>
          </button>
        </Link>
      </li>

      <>
        {user ? (
          <>
            <span>{user?.displayName}</span>
            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </>
    </>
  );
  return (
    <div className="navbar fixed z-10 max-w-screen-lg bg-black bg-opacity-40">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navTitles}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Pet Adoption</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navTitles}</ul>
      </div>
      <div className="navbar-end">
        <>
          {user ? (
            <>
              <span>{user.displayName}</span>
              <button onClick={handleLogOut} className="btn">
                Log Out
              </button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </>
      </div>
    </div>
  );
};

export default NavBar;
