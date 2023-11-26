import { Helmet } from "react-helmet-async";

const  PetListing = () => {
  return (
    <div>
      <Helmet><title>Pet Adoption || Pet Listing</title></Helmet>
      <h2 className="text-2xl">This is Pet Listing page</h2>
    </div>
  );
};

export default PetListing;
