import { useEffect, useState } from "react";

const useListing = () => {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://pet-adoption-platform-server-eight.vercel.app/listings")
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        setLoading(false);
      });
  }, []);
  return [listing, loading];
};

export default useListing;
