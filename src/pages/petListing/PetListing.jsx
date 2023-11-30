import { Helmet } from "react-helmet-async";

import listingCover from "../../assets/act8.jpg";
import Cover from "../shared/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useListing from "../../hooks/useListing";
import ListingTab from "../../components/listingTab/ListingTab";
const PetListing = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [listing] = useListing();
  const cats = listing.filter((item) => item.category === "cat");
  const dogs = listing.filter((item) => item.category === "dog");
  const rabbits = listing.filter((item) => item.category === "rabbit");
  const fishes = listing.filter((item) => item.category === "fish");
  return (
    <div>
      <Helmet>
        <title>Pet Adoption || Pet Listing</title>
      </Helmet>
      <Cover img={listingCover} title={"Pet Adoption"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Cats</Tab>
          <Tab>Dogs</Tab>
          <Tab>Rabbits</Tab>
          <Tab>Fish</Tab>
          <Tab>Others</Tab>
        </TabList>
        <TabPanel>
          <ListingTab items={cats}></ListingTab>
        </TabPanel>
        <TabPanel>
          <ListingTab items={dogs}></ListingTab>
        </TabPanel>
        <TabPanel>
          <ListingTab items={rabbits}></ListingTab>
        </TabPanel>
        <TabPanel>
          <ListingTab items={fishes}></ListingTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PetListing;
