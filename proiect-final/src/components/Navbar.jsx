import { Link } from "react-router-dom";

function Navbar() {
return(
    <ul>
        <li>
            <Link to="/create-destination"> Destination list</Link>
        </li>

        <li>
            <Link to="/create-destination"> Create destination</Link>
        </li>

    </ul>
)
}

export default Navbar;