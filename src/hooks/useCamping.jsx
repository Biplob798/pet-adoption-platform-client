import  { useEffect, useState } from 'react';

const useCamping = () => {
    const [camping,setCamping]=useState([])
    const [loading,setLoading]= useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/campings')
        .then(res=>res.json())
        .then(data=>{
            setCamping(data)
            setLoading(false)
        })
    },[])
    return [camping,loading]
   
};

export default useCamping;