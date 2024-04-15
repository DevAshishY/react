import { Link, Outlet } from "react-router-dom";

function Service(){
    return(
        <>
        <h1>Service</h1>
        <Link to='java'>java</Link> <br></br>
        <Link to='phython'>phython</Link>
        <Outlet/>
       

        </>
    )
    }
    
    export default Service;