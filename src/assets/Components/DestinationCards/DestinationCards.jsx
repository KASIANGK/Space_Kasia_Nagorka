import React from 'react';
import { useParams } from "react-router-dom";
import './DestinationCards.css'
import Europa from '../../../../../img/destination/europa.png'
import Moon from '../../../../../img/destination/moon.png'
import { Link } from "react-router-dom";
import Navbar from '../NavBar/NavBar'

function DestinationCards() {
    const Destinations = [
        { 
            id: 0,
            name: 'Moon',
            image: Moon,
            descriptif: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery",
        },
        { 
            id: 1,
            name: 'Europa',
            image: Europa,
            descriptif: "petit texte"
        },
        { 
            id: 2,
            name: 'Jupiter' 
        },
        { 
            id: 3,
            name: 'Saturn' 
        },
    ];

    const { id } = useParams();
    const destinationId = parseInt(id); 
    const destination = Destinations.find(destination => destination.id === destinationId);

    return (
        <div className="destination">
            <Navbar></Navbar>
            <div className='destination-card'>
                {Destinations.map((element) => (
                    <div key={element.id}>
                        <Link to={`/destinationcards/${element.id}`}>{element.name}</Link>
                    </div>
                ))}
            </div>
            <h1>{destination.name}</h1>
            <img src={destination.image}/>
            <p>{destination.descriptif}</p>
        </div>
    );
}

export default DestinationCards