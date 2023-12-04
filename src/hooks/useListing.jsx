import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useListing = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: listing = [] } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axiosPublic.get("/pets");
      return res.data;
    },
  });
  return [listing, refetch];
};

export default useListing;
