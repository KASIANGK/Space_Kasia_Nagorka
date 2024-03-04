import React from 'react';
import { useParams } from "react-router-dom";
import './DestinationCards.css'
import Europa from '../../../../../img/destination/europa.png'
import Moon from '../../../../../img/destination/moon.png'
import Mars from '../../../../../img/destination/mars.png'
import Titan from '../../../../../img/destination/titan.png'
import { Link } from "react-router-dom";
import Navbar from '../NavBar/NavBar'
import bgDestination from '../../../../../img/destination/background-destination-desktop.jpg'

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
            descriptif: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery",
        },
        { 
            id: 2,
            name: 'Mars',
            image: Mars, 
            descriptif: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery",
        },
        { 
            id: 3,
            name: 'Titan',
            image: Titan, 
            descriptif: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery",
        },
    ];

    const { id } = useParams();
    const destinationId = parseInt(id); 
    const destination = Destinations.find(destination => destination.id === destinationId);

    return (
        <div className="destination">
          <div className='destination-bg'
          style={{backgroundImage: 'url(' + bgDestination + ')'}}>
              <Navbar></Navbar>
              <div className='destination-container'>
                <div className='destination-content-1'>
                  <h3>01 PICK YOUR DESTINATION</h3>
                  <img src={destination.image}/>
                </div>
                <div className='destination-content-2'>
                  <div className='ntgh'>
                    
                  </div>
                  <div className='destination-card'>
                      {Destinations.map((element) => (
                          <div key={element.id}>
                              <Link to={`/destinationcards/${element.id}`}>{element.name}</Link>
                          </div>
                      ))}
                  </div>
                  <h1>{destination.name}</h1>
                  <p>{destination.descriptif}</p>
                </div>
              </div>
            </div>
        </div>
    );
}

export default DestinationCards