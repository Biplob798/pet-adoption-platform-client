import { Helmet } from "react-helmet-async";

import listingCover from "../../assets/act8.jpg";
import Cover from "../shared/cover/Cover";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import { useState } from "react";
import useListing from "../../hooks/useListing";
import ListingTab from "../../components/listingTab/ListingTab";
import { useState } from "react";
const PetListing = () => {
  // const [tabIndex, setTabIndex] = useState(0);
  const [listing, refetch] = useListing();
  const [filterCategory, setFilterCategory] = useState(listing);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);

    if (selectedValue === "Select All") {
      setFilterCategory(listing); // Reset to the original listing when "Select" is chosen
    } else {
      const filteringCategories = listing.filter((category) =>
        category.category.toLowerCase().includes(selectedValue.toLowerCase())
      );
      setFilterCategory(filteringCategories);
    }
    refetch();
  };

  const handleSearchCategory = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);

    if (selectedValue === "Select All") {
      setFilterCategory(listing); // Reset to the original listing when "Select" is chosen
    } else {
      const filteringCategories = listing.filter((category) =>
        category.category.toLowerCase().includes(selectedValue.toLowerCase())
      );
      setFilterCategory(filteringCategories);
    }
    refetch();
  };

  console.log(filterCategory);

  // const cats = listing.filter((item) => item.category === "cat");
  // const dogs = listing.filter((item) => item.category === "dog");
  // const rabbits = listing.filter((item) => item.category === "rabbit");
  // const fishes = listing.filter((item) => item.category === "fish");
  return (
    <div>
      <Helmet>
        <title>Pet Adoption || Pet Listing</title>
      </Helmet>
      <Cover img={listingCover} title={"Pet Adoption"}></Cover>
      <div className="my-5 w-full flex justify-center gap-5">
        <div>
          <form>
            <input
              className="input input-bordered"
              type="text"
              placeholder="search by category..."
              value={selectedCategory}
              onChange={handleSelectCategory}
            />
          </form>
        </div>
        <div>
          <form>
            <select
              type="text"
              className="input input-bordered w-[200%]"
              onChange={handleSearchCategory}
              value={selectedCategory}
            >
              <option>Select All</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Fish">Fish</option>
              <option value="Rabbit">Rabbit</option>
            </select>
          </form>
        </div>
      </div>
      <div>
        <ListingTab items={filterCategory}></ListingTab>
      </div>
    </div>
  );
};

export default PetListing;
