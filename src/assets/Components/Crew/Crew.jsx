import NavBar from "../NavBar/NavBar";
import './Crew.css'
import Carousel from "../Carousel/Carousel";

function Crew () {

    
    return (
        <div>
            <div className="crew-og">
                <NavBar></NavBar>
                <div className="crew">
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    )
}

export default Crew

