import { Link } from "react-router-dom";
import '../styles/NavBar.css'


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <span className="top-nav-bar__logo">Coast Airline</span>
        <div className="nav-elements">
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/log-in">Log In</Link>
            </li>
            <li>
              <Link to="/points">Points</Link>
            </li>
            <li>
              <Link to="/Destinations">Destinations</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default NavBar;