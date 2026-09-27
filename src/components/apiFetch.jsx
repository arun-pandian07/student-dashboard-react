import { useState,useEffect } from "react";

function useFetch(){
    const[data, setData] = useState([]);
    const[loading,setLoading]=useState(true);
    const[error, setError]=useState(null);


    useEffect(()=>{
        fetch("https://api.slingacademy.com/v1/sample-data/files/student-scores.json")
        .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
        .then((result)=>setData(result))
        .catch((error)=>setError(error.message))
        .finally(()=>setLoading(false));

        
        
    },[]);

    return {data,loading,error};
}

export default useFetch;