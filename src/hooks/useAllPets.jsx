import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllPets = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: allPets = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["pet"],
    queryFn: async () => {
      const res = await axiosPublic.get("/pets");
      return res.data;
    },
  });
  return [allPets, loading, refetch];
};

export default useAllPets;
