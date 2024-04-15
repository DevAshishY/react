import { Link, Outlet } from "react-router-dom";


function Home(){
return(
    <>
    <header/>
   <ul>
    <li>
        <Link to="about">about</Link>
    </li>
    <li>
        <Link to="service">Service</Link>
    </li>
   </ul>
   <Outlet/>
    </>
)
}

export default Home;