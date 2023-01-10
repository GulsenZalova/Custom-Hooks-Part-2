import React, { useEffect, useState } from 'react'

function UseFetch(url) {
   const [response,setResponse]=useState(null)
   const [isLoading,setİsLoading]=useState(false)
   const [error,setError]=useState(null)
    useEffect( () =>{
    setİsLoading(true)
     const dataFetch=()=>{
      try{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setResponse(data))
        setİsLoading(false)
        }catch(error){
            setError(error)
        }
      }
        dataFetch();
    },[])
   return [response,isLoading,error]
}

export default UseFetch
