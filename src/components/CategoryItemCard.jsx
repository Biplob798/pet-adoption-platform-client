import { Link } from "react-router-dom";

const CategoryItemCard = ({ item }) => {
  const { category, title, img, shortDescription } = item;
  return (
    <div>
      <div className="bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto text-center">
          <div>
            <div className="mb-8">
              <img
                src={img}
                alt=""
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{category}</h3>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-700">{shortDescription}</p>
            </div>
          
          <div className="card-actions justify-end items-center">
          <Link to='/sting'>  <button
              className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400 w-full"
            >
              View All
            </button></Link>
          </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItemCard;
