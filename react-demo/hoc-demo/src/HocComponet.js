import { useState } from "react";


function HocComponent(OldComponent){
    return function  ReturnAfunction(props){
        const [count,setCount] = useState(0)
        function counterIncrease(){
            setCount(count+1)
        }
       return (
        <OldComponent {...props} count={count} counterIncrease={counterIncrease} />
       )
    }
}

export default HocComponent;