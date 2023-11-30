import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
        return;
      }
  
      const card = elements.getElement(CardElement);
      if(!card){
        return
      }

     
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card
        });
  
        if (error) {
          console.error("Payment error:", error);
        
        } else {
          console.log("Payment method", paymentMethod);
          
        }

      
  }

  


  return (
    <div>
      <form onSubmit={handleSubmit} className="border p-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn w-full bg-green-600 border p-2 mt-6"
          type="submit"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
