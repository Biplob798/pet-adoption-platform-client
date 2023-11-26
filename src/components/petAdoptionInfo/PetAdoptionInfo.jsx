/* eslint-disable react/no-unescaped-entities */

import SectionTitle from "../sectionTitle/SectionTitle";

const PetAdoptionInfo = () => {
    return (
        <section>
            <SectionTitle subHeading={'Pet Adoption'} heading={'Pet Adoption Info'}></SectionTitle>
      <div className="bg-gray-100 p-8 border-b-2">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Adopting is Important</h2>
          <p className="text-gray-700 mb-8">
            Adopting a pet is not just about finding a companion; it's about
            giving a second chance to an animal in need. By choosing adoption,
            you are providing a loving home to a pet that may have faced
            challenges. Your decision makes a significant difference in their
            lives.
          </p>
  
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
            <p className="text-gray-700">
              PetAdopt is proud to be part of a community that values compassion
              and responsibility. With each successful adoption, we contribute
              to reducing the homeless pet population and promoting the
              well-being of animals. Join us in making a positive impact on the
              lives of pets and the families that welcome them into their homes.
            </p>
          </div>
        </div>
      </div>
      </section>
    );
  };
  
  export default PetAdoptionInfo;