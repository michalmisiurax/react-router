import "./nav.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" end>
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact/new" end>
            New Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact/:id" end>
            Show one contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
