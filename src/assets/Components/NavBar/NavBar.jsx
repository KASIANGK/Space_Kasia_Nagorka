import { Link } from "react-router-dom";
import './NavBar.css'


function NavBar() {
    return (
        <div>
            <div className="navbar">
                <ul className="nav-links">
                    <Link to="/">HOME</Link>
                    <Link to="/destinationcards/0">DESTINATION</Link>
                    <Link to="/crew">CREW</Link>
                    <Link to="/technology/0">TECHNOLOGY</Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
