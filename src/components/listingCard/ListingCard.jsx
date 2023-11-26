

const ListingCard = ({ item }) => {
 
  const { name,title, img, short_description,age,location } = item;
  return (
    <div className="bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto text-center">
          <div>
            <div className="mb-8">
              <img
                src={img}
                alt=""
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{name}</h3>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-700">{short_description}</p>
              <p>#Location: {location}, #Age-{age}</p>
            </div>
          
          <div className="card-actions justify-end items-center">
            
            {/* The button to open modal */}
<a href="#my_modal_8" className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400 w-full">View Details</a>
{/* Put this part before </body> tag */}
<div className="modal" role="dialog" id="my_modal_8">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with anchor links</p>
    <div className="modal-action">
     <a href="#" className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400 w-full">Back</a>
    </div>
  </div>
</div>
          </div>
       
          </div>
        </div>
      </div>
  );
};

export default ListingCard;