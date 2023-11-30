import { Helmet } from "react-helmet-async";

import listingCover from "../../assets/act8.jpg";
import Cover from "../shared/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useCamping from "../../hooks/useCamping";
import CampingTab from "../../components/camping/CampingTab";
const DonationCamping = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [camping] = useCamping();
  const Chances = camping.filter((item) => item.animalName === "Chance");
  const Buddy = camping.filter((item) => item.animalName === "Buddy");
  const Whiskers = camping.filter((item) => item.animalName === "Whiskers");
  const Mittens = camping.filter((item) => item.animalName === "Mittens");
  const Fluffy = camping.filter((item) => item.animalName === "Fluffy");
  const Luna = camping.filter((item) => item.animalName === "Luna");
  const Max = camping.filter((item) => item.animalName === "Max");
  const Bella = camping.filter((item) => item.animalName === "Bella");
  const Daisy = camping.filter((item) => item.animalName === "Daisy");
  const Rocky = camping.filter((item) => item.animalName === "Rocky");
  const Milo = camping.filter((item) => item.animalName === "Milo");
  const Mia = camping.filter((item) => item.animalName === "Mia");
  return (
    <div>
      <Helmet>
        <title>Pet Adoption || Pet Listing</title>
      </Helmet>
      <Cover img={listingCover} title={"Pet Adoption"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Chances</Tab>
          <Tab>Buddy</Tab>
          <Tab>Whiskers</Tab>
          <Tab>Mittens</Tab>
          <Tab>Fluffy</Tab>
          <Tab>Luna</Tab>
          <Tab>Max</Tab>
          <Tab>Bella</Tab>
          <Tab>Daisy</Tab>
          <Tab>Rocky</Tab>
          <Tab>Milo</Tab>
          <Tab>Mia</Tab>
          <Tab>Others</Tab>
          <Tab>Others</Tab>
        </TabList>
        <TabPanel>
         <CampingTab items={Chances}></CampingTab>
        </TabPanel>
        <TabPanel>
         <CampingTab items={Buddy}></CampingTab>
        </TabPanel>
        <TabPanel>
         <CampingTab items={Whiskers}></CampingTab>
        </TabPanel>
        <TabPanel>
         <CampingTab items={Mittens}></CampingTab>
        </TabPanel>
        <TabPanel>
         <CampingTab items={Fluffy}></CampingTab>
        </TabPanel>
        <TabPanel>
         <CampingTab items={Luna}></CampingTab>
        </TabPanel>
        <TabPanel>
         <CampingTab items={Max}></CampingTab>
        </TabPanel>
        <TabPanel>
         <CampingTab items={Bella}></CampingTab>
        </TabPanel>
        <TabPanel>
         <CampingTab items={Daisy}></CampingTab>
        </TabPanel>
        <TabPanel>
         <CampingTab items={Rocky}></CampingTab>
        </TabPanel>
        <TabPanel>
         <CampingTab items={Mia}></CampingTab>
        </TabPanel>
        <TabPanel>
         <CampingTab items={Milo}></CampingTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DonationCamping;
