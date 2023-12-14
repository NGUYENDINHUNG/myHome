import React from "react";
import "./index.css";
function Block({no ,title, des, number , bgColor}) {

   
   
  return (
    <>
    <p>đây la khối số {no}</p>
       <h1>{des}</h1>
      <div className='block' style={{background: bgColor}}>{title} <p>{number}</p> </div>
    
 
      {/* {
            props.number &&  <h4>{props.number}</h4>
         }

         {
            props.number ? <p>{props.number}</
            p> : null

         } */}

    

      {/* {isInside ? (
        <div>
          <h1>abc</h1>
          <div className="block">{title}</div>
        </div>
      ) : (
        <div className="block">{title}</div>
      )} */}
    </>
  );
}

export default Block;
