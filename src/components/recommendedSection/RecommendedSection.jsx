/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../sectionTitle/SectionTitle";
import img1 from "../../assets/ins1.jpg";
import img2 from "../../assets/ins2.jpg";
import img3 from "../../assets/ins3.jpg";
import img4 from "../../assets/ins4.jpg";
import img5 from "../../assets/ins5.jpg";
import img6 from "../../assets/ins6.jpg";

const RecommendedSection = () => {
  return (
    <div>
      <SectionTitle
        subHeading={
          "many people give animals from shelters a chance to live best lives with us"
        }
        heading={"More Donation camping"}
      ></SectionTitle>
      <div className="bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mb-8">
              <img
                src={img1}
                alt=""
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Jane Smith,35</h3>
              <p className="text-gray-700">
                PetAdopt made the adoption process seamless. I'm grateful for
                the support and guidance they provided.
              </p>
            </div>
            <div className="mb-8">
              <img
                src={img2}
                alt=""
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2"> Emily Johnson,29</h3>
              <p className="text-gray-700">
                {" "}
                The team at PetAdopt cares deeply about their mission. They
                helped me find the perfect pet for my family.
              </p>
            </div>
            <div className="mb-8">
              <img
                src={img3}
                alt=""
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Michael Anderson,27</h3>
              <p className="text-gray-700">
                {" "}
                'Our adopted pet has become an integral part of our family.
                Thank you, PetAdopt, for bringing us together!
              </p>
            </div>
            <div className="mb-8">
              <img
                src={img4}
                alt=""
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Sophia Rodriguez ,25</h3>
              <p className="text-gray-700">
                {" "}
                'The adoption process was straightforward, and the follow-up
                support from PetAdopt has been exceptional.
              </p>
            </div>
            <div className="mb-8">
              <img
                src={img5}
                alt=""
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Daniel Kim ,31</h3>
              <p className="text-gray-700">
                {" "}
                PetAdopt not only helped us find a pet but also provided
                valuable resources on pet care. We appreciate their dedication.
              </p>
            </div>
            <div className="mb-8">
              <img
                src={img6}
                alt=""
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">John Doe ,35</h3>
              <p className="text-gray-700">
                {" "}
                Adopting from PetAdopt was the best decision I ever made. My
                furry friend has brought so much joy into my life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedSection;
