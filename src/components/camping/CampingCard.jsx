import { Link } from "react-router-dom";

const CampingCard = ({ item }) => {
  const {_id, campaignName, animalName, image, maxAmount, amountRaised } = item;
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div>
          <div className="mb-8">
            <img
              src={image}
              alt=""
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{campaignName}</h3>
            <h3 className="text-xl font-bold mb-2">{animalName}</h3>
            <p>
              #MaxAmount: $ {maxAmount}, #Donation-{amountRaised}$
            </p>
          </div>
          <Link to={`/donationDetails/${_id}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400 w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampingCard;
