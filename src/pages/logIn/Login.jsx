import { Helmet } from "react-helmet-async";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
    const backGroundImage = {
        backgroundImage: `url(https://i.ibb.co/xhM9r0p/bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div style={backGroundImage} className="p-8 text-white">
      <Helmet>
        <title>Pet Adoption || Login </title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col border">
          <div className="card shrink-0 w-full shadow-2xl bg-white text-black">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <button className="btn btn-primary">Login</button>
                <h2 className="mt-2">Already Have a Account <Link to='/signUp'>Please SignUp</Link></h2>
              </div>
              <div className="divider">OR</div>

              <div>
               <div className="flex justify-between items-center mb-2 border p-2 "> <FaGoogle /><h2>Google</h2></div>
               <div className="flex justify-between items-center  border p-2"> <FaGithub></FaGithub><h2>Github</h2></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
