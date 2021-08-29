import React from "react";
// import Particles from 'react-particles-js';
import slidetwo from "../images/slidetwo.jpg";
import slidetiga from "../images/slidetiga.jpg";
import slidefour from "../images/slidefour.jpg";
import slidefive from "../images/slidefive.jpg";
import cover from "../images/cover.jpg";
import { Carousel } from 'react-bootstrap';


const About = () => {
    return (
        <Carousel control={false} fade={true} pause={false}>
           {/* <Particles>
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
          }
        }}
         </Particles> */}
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={slidetwo}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={slidetiga}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={slidefour}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={cover}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={slidefive}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      )
    }
export default About;
