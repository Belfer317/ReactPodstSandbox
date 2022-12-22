import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>
      </li>
      <li>
        <Link to="/addElement">Add element</Link>
      </li>
    </ul>
  </nav>
);
export default Nav;
