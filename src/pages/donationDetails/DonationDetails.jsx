import { Link, useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../dashboard/donationByStripe/CheckOutForm";


const DonationDetails = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
  const loadedCampingData = useLoaderData();
  const { maxAmount, amountRaised, description, image } = loadedCampingData;
  console.log(loadedCampingData);
  return (
    <div>
      <div>
        <div>
          <img src={image} alt="" />
        </div>
        <div className="my-4">
          <h2>{description} </h2>
        </div>
        <div className="flex justify-between items-center border p-2 my-4">
          <p>maxDonation: {maxAmount} $</p>
          <p>Amount :{amountRaised} $</p>
        </div>
      </div>
      {/* modal form  */}
      {/* The button to open modal */}
      <a
        href="#my_modal_8"
        className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400 w-full mb-4"
      >
        Donate now
      </a>
      {/* Put this part before </body> tag */}
      <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box">
          <form>
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Donate Amount</span>
              </label>
                <input
                type="number"
                placeholder="Donate Please"
                name="donate"
                className="input input-bordered"
                required
              />
            </div>
             {/* payment stripe  */}
             <div>
              <div>
                <Elements stripe={stripePromise}>
                  <CheckOutForm></CheckOutForm>
                </Elements>
              </div>
            </div>
          </form>
          <div className="modal-action">
            <Link to="/recommendedSection">
            
              <button>Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
