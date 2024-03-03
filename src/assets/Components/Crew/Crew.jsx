import NavBar from "../NavBar/NavBar";
import ImageDoug from '../../../../../img/image-douglas-hurley.webp'
import './Crew.css'
import Carousel from "../Carousel/Carousel";

function Crew () {

    
    return (
        <div>
            <NavBar></NavBar>
            <div className="crew">
                {/* <div className="carousel">
                    <h3>02 MEET YOUR CREW</h3>
                    <h2>COMMANDER</h2>
                    <h1>DOUGLAS HURLEY</h1>
                    <p>Douglas </p>
                </div>
                <div className="crew-img">
                    <img src={ImageDoug}></img>
                </div> */}
                <Carousel></Carousel>
            </div>
        </div>
    )
}

export default Crew

