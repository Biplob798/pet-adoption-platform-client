
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
     
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <FaFacebookF />

          <FaYoutube></FaYoutube>
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
