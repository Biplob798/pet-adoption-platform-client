import CampingCard from "./CampingCard";


const CampingTab = ({items}) => {
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              items.map(item=><CampingCard key={item._id} item={item}></CampingCard>)
            }
          </div>
        </div>
    );
};

export default CampingTab;