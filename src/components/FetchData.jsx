import UseFetch from "../hooks/UseFetch";
import { useState } from "react";
import React from 'react'

function FetchData() {
const [url,setUrl]=useState("https://northwind.vercel.app/api/customers");
const [response,isLoading,error]=UseFetch(url);
const submitUrl=(url)=>{
  setUrl(url)
}
  return (
    <>
        <h1>using the useFetch hook </h1>
      <input style={{witdh:"40%",padding:"20px 50px"}} type="text" value={url} />
      <button style={{witdh:"40%",padding:"20px 50px",backgroundColor:"blue",marginLeft:"15px",color:"white"}} onClick={(e)=>{submitUrl(e.target.value)}} >Submit URL</button>
      {
        response ? response.map((x,i)=>(
          <p key={i}>Response:{x.id} </p>
        )) : isLoading ? <p>İsLoading:{isLoading}</p> : 
        error ? <p>Error: {error}</p> : null
      }
    </>
  )
}

export default FetchData
