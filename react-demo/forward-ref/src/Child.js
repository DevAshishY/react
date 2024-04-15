import { forwardRef } from "react";

function Child(props,ref){
console.log(ref);

function focus(){
    ref.current.focus()
}
    return(
<button onClick={()=>focus()}>button</button>
    )
}
export default forwardRef(Child);