import { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import CategoryItemCard from "../CategoryItemCard";

const CategorySectionCard = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={"Our category Pet"}
        heading={"Popular Pets"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
        {category.map((item) => (
          <CategoryItemCard key={item.id} item={item}></CategoryItemCard>
        ))}
      </div>
    </div>
  );
};

export default CategorySectionCard;
