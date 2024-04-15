import HocComponent from "./HocComponet";

function Click(props){
    const {count,counterIncrease} = props
 
return(
    <>
    {count}

    <button onClick={()=>counterIncrease()}>CLik me</button>
    
    </>
)
}
export default HocComponent(Click);