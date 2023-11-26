import  { useEffect, useState } from 'react';

const useListing = () => {
    const [listing,setListing]=useState([])
    const [loading,setLoading]= useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/listings')
        .then(res=>res.json())
        .then(data=>{
            setListing(data)
            setLoading(false)
        })
    },[])
    return [listing,loading]
   
};

export default useListing;