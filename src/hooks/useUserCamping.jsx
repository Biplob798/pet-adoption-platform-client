import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserCamping = () => {
  // tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: campings = [] } = useQuery({
    queryKey: ["camping", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/campings/user?email=${user.email}`);
      return res.data;
    },
  });
  return [campings, refetch];
};

export default useUserCamping;
