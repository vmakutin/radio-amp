import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

function ControlledCarousel({index, setIndex, radioStations}) {

  return (
    <Carousel activeIndex={index} onSelect={(e)=>setIndex(e)} data-bs-interval="false">
      
      {radioStations["radios"].map((radio) => {
        return (
          <Carousel.Item key={radio.Name}>
            <img src={radio.Logo}
                 alt={radio.Name}/>
            <Carousel.Caption>
              {/* <h3>{radio.Name}</h3> */}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
      
    </Carousel>
  );
}

export default ControlledCarousel;