import React from "react";
import "./App.css";
import Parent from "./Parent"
import { useState } from "react";


function App() {
//  const [count , setcount] = useState(0);
//  const [color , setcolor] = useState('')
//  const [newcolor , setnewcolor] = useState("");
const [isclick,setisclick] = useState(false)
function handleclick(){
  setisclick(!isclick)
  }

 

//  let fillMe = ()=>{
//   setcount(count+1)
//   setcolor("changed")
//   setnewcolor("royalblue")
//  };
  
  return <>
         {/* <div className={newcolor}>
         <Parent />
         </div>
     
     <h2 className={color}>fillme</h2>
     <p>{count}</p> */}
     <button onClick={handleclick}>{isclick ? 'Cliked':'Clike Me'}</button>
     
  </>
}

function toglebutton(){
  return (
    <div>
      <App/>
    </div>
  );
}

export default toglebutton;
