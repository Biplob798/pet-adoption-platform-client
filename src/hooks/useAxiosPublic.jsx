import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://pet-adoption-platform-server-eight.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
