import { useState } from "react";
import HocComponent from "./HocComponet";

function Hover(props){
   const {count,counterIncrease} = props;
return(
    <>
    {count}

    <button onMouseOver={()=>counterIncrease()}>Hover me</button>
    
    </>
)
}
export default HocComponent(Hover);