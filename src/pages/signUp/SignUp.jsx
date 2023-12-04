import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../shared/socialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, handleUpdateProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      handleUpdateProfile(data.name, data.photoURL)
        .then(async () => {
          const userInfo = { name: data.name, email: data.email };

          await axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created add to the data base");
              reset();
              Swal.fire({
                position: "top-right",
                icon: "success",
                title: "Your Sign Up successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  // backGroundImage
  const backGroundImage = {
    backgroundImage: "url(https://i.ibb.co/xhM9r0p/bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={backGroundImage} className="p-8 text-white">
      <Helmet>
        <title>Pet Adoption || Login </title>
      </Helmet>
      <div className="hero ">
        <div className="hero-content flex-col border">
          <div className="card shrink-0 w-full shadow-2xl bg-white text-black">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 16,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 16 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password have one Uppercase one lower case, one number must
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
                <h2 className="mt-2">
                  Already Have a Account <Link to="/login">Please Login</Link>
                </h2>
              </div>
              <div className="divider">OR</div>

              {/* social login  */}
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
