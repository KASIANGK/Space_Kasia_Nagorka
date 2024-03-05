import { Link } from "react-router-dom";
import './NavBar.css'
import Logo from '../../../../../img/shared/logo.svg'


function NavBar() {
    return (
        <div>
            <div className="navbar">
                <div className="nav-left">
                    <img src={Logo}></img>
                    <p>____________________________</p>
                </div>
                <div className="nav-right">
                    <ul className="nav-links">
                        <Link to="/">00 HOME</Link>
                        <Link to="/destinationcards/0">01 DESTINATION</Link>
                        <Link to="/crew">02 CREW</Link>
                        <Link to="/technology/0">03 TECHNOLOGY</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
