import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePet = () => {
  const axiosPublic = useAxiosPublic();
  // const [pet,setPet]=useState([])
  // const [loading,setLoading]= useState(false)
  // useEffect(()=>{
  //     fetch('https://pet-adoption-platform-server-eight.vercel.app/pet')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         setPet(data)
  //         setLoading(false)
  //     })
  // },[])
  // return [pet,loading]

  const {
    data: pet = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["pet"],
    queryFn: async () => {
      const res = await axiosPublic.get("/pet");
      return res.data;
    },
  });
  return [pet, loading, refetch];
};

export default usePet;
