import img1 from "../../assets/action1.jpg";
import img2 from "../../assets/ct2.jpg";
import img3 from "../../assets/act3.webp";
import img4 from "../../assets/act4.jpg";
import img5 from "../../assets/act5.jpg";
import img6 from "../../assets/act6.png";
import img7 from "../../assets/act7.jpg";
import img8 from "../../assets/act8.jpg";
import img9 from "../../assets/act9.jpg";

const CallToActionSection = () => {
  return (
    <section className="bg-gray-200 py-10 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Give a Home, Give a Second Chance
        </h2>
        <p className="text-gray-700 mb-8">
          Adopting a pet can bring joy, companionship, and love into your life.
          Give these animals a chance to thrive in a loving home.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mb-8">
          <div >
            {" "}
            <img
            className="w-full h-48"
              src={img1}
              alt="Inspirational"
             
            />
          </div>
          <div className="w-full">
            <img
              src={img2}
              alt="Inspirational"
              className="w-full h-48"
            />
          </div>
          <div className="w-full">
            <img
              src={img3}
              alt="Inspirational"
              className="w-full h-48"
            />
          </div>
          <img
            src={img4}
            alt="Inspirational"
            className="w-full h-48"
          />
          <img
            src={img5}
            alt="Inspirational"
            className="w-full h-48"
          />
          <img
            src={img6}
            alt="Inspirational"
            className="w-full h-48"
          />
          <img
            src={img7}
            alt="Inspirational"
            className="w-full h-48"
          />
          <img
            src={img8}
            alt="Inspirational"
            className="w-full h-48"
          />
          <img
            src={img9}
            alt="Inspirational"
            className="w-full h-48"
          />
        </div>
        <p className="text-gray-700 mb-8">
          Your decision to adopt can make a significant difference. Explore our
          pets and find your new family member today.
        </p>
        <button className="cta-button">Explore Pets</button>
      </div>
    </section>
  );
};

export default CallToActionSection;
