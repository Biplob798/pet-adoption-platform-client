import SectionTitle from "../sectionTitle/SectionTitle";

/* eslint-disable react/no-unescaped-entities */
const AboutUsSection = () => {
    return (
        <section>
        <SectionTitle  subHeading={'Pet Adoption'} heading={'About Us'}></SectionTitle>
      <div className="bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to PetAdopt</h2>
          <p className="text-gray-700 mb-8">
            At PetAdopt, we are dedicated to connecting loving families with
            adorable pets. Our platform was created with the goal of making the
            adoption process simple and enjoyable.
          </p>
  
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">How PetAdopt Works</h3>
            <p className="text-gray-700">
              PetAdopt offers a user-friendly interface that allows you to browse
              available pets, learn about their stories, and connect with shelters
              or individuals looking to find a home for these lovely animals.
            </p>
          </div>
  
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Why We Created PetAdopt</h3>
            <p className="text-gray-700">
              Our passion for animals and the belief that every pet deserves a
              loving home inspired the creation of PetAdopt. We aim to make a
              positive impact by facilitating the adoption process and bringing
              joy to both pets and their new families.
            </p>
          </div>
  
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              PetAdopt's mission is to create a community where every pet finds a
              loving home. We strive to promote responsible pet ownership and
              foster connections that last a lifetime.
            </p>
          </div>
  
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Join Us on Our Journey</h3>
            <p className="text-gray-700">
              We invite you to join us in our mission. Explore the pets available
              for adoption, share your experiences, and be a part of the PetAdopt
              community. Your support means the world to us and the pets we
              cherish.
            </p>
          </div>
        </div>
      </div>
      </section>
    );
  };
  
  export default AboutUsSection;