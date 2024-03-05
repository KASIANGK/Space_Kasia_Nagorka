import NavBar from "../NavBar/NavBar";
import './Crew.css'
import Carousel from "../Carousel/Carousel";
import bgCrew from '../../../../../img/bg-crew.jpg'

function Crew () {

    
    return (
        <div>
            <div className="crew-og"
            style={{backgroundImage: 'url(' + bgCrew + ')'}}>
                <NavBar></NavBar>
                <h3>02 MEET YOUR CREW</h3>
                <div className="crew">
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    )
}

export default Crew

