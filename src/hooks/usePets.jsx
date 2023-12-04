import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePets = () => {
  // tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: pets = [] } = useQuery({
    queryKey: ["pets", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/pets/user?email=${user.email}`);
      return res.data;
    },
  });
  return [pets, refetch];
};

export default usePets;
