import { Helmet } from "react-helmet-async";
import AboutUsSection from "../../../components/aboutUsSection/AboutUsSection";
import CallToActionSection from "../../../components/callToActionSection/CallToActionSection";
import CategorySectionCard from "../../../components/categorySection/CategorySectionCard";
import HappyOwner from "../../../components/happyOwners/HappyOwner";
import PetAdoptionInfo from "../../../components/petAdoptionInfo/PetAdoptionInfo";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet><title>Pet Adoption || Home </title></Helmet>
      <Banner></Banner>
      <CategorySectionCard></CategorySectionCard>
      <CallToActionSection></CallToActionSection>
      <AboutUsSection></AboutUsSection>
      <PetAdoptionInfo></PetAdoptionInfo>
      <HappyOwner></HappyOwner>
    
    </div>
  );
};

export default Home;
