import NavBar from '../NavBar/NavBar'
import './Technology.css'
import backgroundImage from '../../../../../img/tech-bg.png'
import LaunchVehicle from '../../../../../img/technology/image-launch-vehicle-portrait.jpg'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Technology () {

    const Technologies = [
        {
            id: 0,
            title: 'THE TERMINOLOGY...',
            name: 'LAUNCH VEHICLE',
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            image: LaunchVehicle,
        },
        {
            id: 1,
            title: 'THE TERMINOLOGY...',
            name: 'LAUNCH VEHICLE1',
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            image: LaunchVehicle,
        },
        {
            id: 2,
            title: 'THE TERMINOLOGY...',
            name: 'LAUNCH VEHICLE2',
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            image: LaunchVehicle,
        }
    ]

    const {id} = useParams()
    const technoId = parseInt(id) 
    const techno = Technologies.find(techno => techno.id === technoId)

    return (
        <div className='technology-og'>
            <div className='technology-bg'
            style={{backgroundImage: 'url(' + backgroundImage + ')'}}>
                <NavBar></NavBar>
                <h3>03 SPACE LAUNCH 101</h3>
                <div className='techno-content'>
                    <div className='technology-txt'>
                        <div className='technology-content-btn'>
                            {Technologies.map((element, index) => (
                                <div key={element.id} className='techno-btn'>
                                    <Link to={`/technology/${element.id}`}>{index + 1}</Link>
                                </div>
                            ))}
                        </div>
                        <div className='techno-content-txt'>
                            <h1>{techno.title}</h1>
                            <h3>{techno.name}</h3>
                            <p>{techno.description}</p>
                        </div>
                    </div>
                    <div className='techno-img'>
                        <img src={LaunchVehicle}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology