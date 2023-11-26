import ListingCard from '../listingCard/ListingCard';

const ListingTab = ({items}) => {
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              items.map(item=><ListingCard key={item._id} item={item}></ListingCard>)
            }
          </div>
        </div>
    );
};

export default ListingTab;