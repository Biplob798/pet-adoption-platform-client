import { FaGoogle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {
      console.log(result);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-between items-center mb-2 border p-2 "
        >
          <FaGoogle />
          <h2>Google</h2>
        </div>
        <div className="flex justify-between items-center  border p-2">
          <FaGithub></FaGithub>
          <h2>Github</h2>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
