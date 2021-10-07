
import React ,{useState} from "react";



const Student = (props) => {
 

  return(
    <div> hey
      {props.colors.map((color,index)=>{
        return(<div height={300} width={400} style={{backgroundColor:color}} key={index}>Hello</div>)
      })}
    </div>
  
  )
}
 
export default Student;


