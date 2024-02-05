import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
export default function NavBar({user,setUser}) {
  
  function handleLogOut(){
    userService.logOut();
    setUser('null');
  }
  return (
    <nav>
      <Link to="/products">Products</Link>
      &nbsp; | &nbsp;
      <Link to="/carts">Carts</Link>
      <p>Welcome,{user.name.toUpperCase()}</p>
      &nbsp; | &nbsp;
      <Link to="#">
        {/* include icon for cart  */}
        {/* <img src></img> */}
      </Link>
      &nbsp; | &nbsp;
      <Link to="#" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}