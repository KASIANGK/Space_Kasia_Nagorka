import { useState } from 'react';
import Doug from '../../../../../img/crew/image-douglas-hurley.png'
import Mark from '../../../../../img/crew/image-mark-shuttleworth.png'
import Victor from '../../../../../img/crew/image-victor-glover.png'
import Anousheh from '../../../../../img/crew/image-anousheh-ansari.png'
import './Carousel.css'

function Carousel() {
  const [slide, setSlide] = useState(0)
  const slides = [
    { 
      name: 'Slide 1',
      image: Doug
    },
    { 
      name: 'Slide 2',
      image: Mark 
    },
    { name: 'Slide 3',
      image: Victor
    },
    { name: 'Slide 4',
      image: Anousheh
    },
  ]

  // function pour maj le slide en fonction de l'index
  function handleChangeSlide(index) {
    setSlide(index)
  }

  return (
    <div className="carousel">
      <div className='carousel-txt'>
        <div className='carousel-content-txt'>
          <h3>02 MEET YOUR CREW</h3>
          <h2>COMMANDER</h2>
          <h1>DOUGLAS HURLEY</h1>
          <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. 
          He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </div>
        <div className="carousel-buttons">
          {slides.map((_, index) => ( // '_' convention pour indiquer une variable qui est presente mais non utilisee
            <button key={index} onClick={() => handleChangeSlide(index)}>
            </button>
          ))}
        </div>
      </div>
      <div className='carousel-img'>
        <div className="carousel-content">
          {slides[slide].name}
          <img src={slides[slide].image}/>
        </div>
      </div>
    </div>
  )
}

export default Carousel
