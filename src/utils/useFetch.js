import { useState, useEffect } from "react";


// Custom hook to fetch data from API
function useFetch(url){
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch(url);
                const result = await response.json();
                setData(result)
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData();
    },[url])

    return {data,loading,error};
}

export default useFetch;