import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/navBar/NavBar";
const Root = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div>
      <div>
        {noHeaderFooter || <NavBar></NavBar>}
        <Outlet></Outlet>
        {noHeaderFooter || <Footer></Footer>}
      </div>
    </div>
  );
};
export default Root;
