import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/img/carousal/slide1.webp';
import Slide2 from '../../assets/img/carousal/slide2.webp';
import Slide3 from '../../assets/img/carousal/slide3.webp';
import "./mycarousel.css";
function Carousels(){
  return (<div id="home">
    <Carousel>
   <Carousel.Item>
     <img
       className="d-block w-100 custom-img"
       src={Slide1}
       alt="First slide"
     />
     <Carousel.Caption>
       <h3>Stay Peace</h3>

     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100 custom-img"
       src={Slide2}
       alt="Third slide"
     />

     <Carousel.Caption>
       <h3>Stay Calm</h3>

     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100 custom-img"
       src={Slide3}
       alt="Third slide"
     />

     <Carousel.Caption>
       <h3>Untill you reach the destination</h3>

     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
    </div>)
}


export default Carousels;
