import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../shared/socialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  // const captchaRef = useRef(null)
  // eslint-disable-next-line no-unused-vars
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSignInUser = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signInUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  // handleCaptcha
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    console.log(user_captcha_value);
  };

  // backGroundImage
  const backGroundImage = {
    backgroundImage: `url(https://i.ibb.co/xhM9r0p/bg.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={backGroundImage} className="p-8 text-white">
      <Helmet>
        <title>Pet Adoption || Login </title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col border">
          <div className="card shrink-0 w-full shadow-2xl bg-white text-black">
            <form onSubmit={handleSignInUser} className="card-body">
              <div className="form-control text-white">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control text-white">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
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
              <div className="form-control text-white">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  // ref={captchaRef}
                  name="captcha"
                  placeholder="type the captcha text"
                  className="input input-bordered"
                  required
                />
                <button className="btn btn-outline btn-sm mt-3">
                  Validate
                </button>
              </div>
              <div className="form-control mt-6 ">
                <input
                  disabled={false}
                  className="btn btn-primary"
                  type="submit"
                  value="login"
                />
                <h2 className="mt-2">
                  New Here create account{" "}
                  <Link to="/signUp">Please SignUp</Link>
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

export default Login;
