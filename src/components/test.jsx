import React, { useEffect, useRef } from 'react'


const Test = (props)=>{

  useEffect(()=>{
    
  },[])

    return(
    <div ref={props.innerRef} onClick={()=>{props.innerRef.current.style.background = 'orange'}}>
      <h1>Hola soy un h1</h1>
      <h1>Hola soy otro h1</h1>
    </div>
    )

}


export default Test