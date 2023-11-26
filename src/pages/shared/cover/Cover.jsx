import { Parallax } from "react-parallax";
const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Transforming Lives, One Adoption at a Time Discover the Joy of Pet
              Adoption with Us! Fulfill Your Home with Love: Embark on the
              Journey of Pet Adoption and Create Lasting Bonds. Open Your Heart
              and Home Experience the Magic of Pet Adoption with Compassion and
              Carecepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
