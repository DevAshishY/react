import {Link} from 'react-router-dom'
function Header(){
return(
    <>
   <ul>
    <li>
        <Link to='/home'>home</Link>
    </li>
    <li>
        <Link to='/about'>home</Link>
    </li>
    <li>
        <Link to="/service">home</Link>
    </li>
   </ul>
    </>
)
}

export default Header;