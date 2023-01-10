import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useState } from 'react'

function LocalStorageData() {
const [inputValue,setİnputValue]=useState("")
const [value,setValue]=useLocalStorage("name","Gülşən")
  return (
    <>
      <h1>using the useLocalStorage hook </h1>
      <input style={{witdh:"40%",padding:"20px 50px"}} type="text" placeholder='Enter Your Name' value={inputValue} onChange={e=>setİnputValue(e.target.value)} />
      <button style={{witdh:"40%",padding:"20px 50px",backgroundColor:"blue",marginLeft:"15px",color:"white"}} onClick={()=>setValue(inputValue)}>Submit Name</button>
    </>
  )
}

export default LocalStorageData
