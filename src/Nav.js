
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'
function Nav() {
  return (
    <div className="navbar">
      <div className="logo">SteakHouse</div>
      <div className="menu">
        <div className="m1">
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active-link">
            About Us
          </NavLink>
          <NavLink to="/events" activeClassName="active-link">
            Events
          </NavLink>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
          <NavLink to="/reservation" activeClassName="active-link">
            Reservation
          </NavLink>
          <NavLink to="/en" activeClassName="active-link">
            En
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Nav;