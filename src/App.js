import React from "react";
import './App.css';
import Carousels from  './components/carousels/carousel.jsx';
import MyNavbar from './components/Navbar/navbar.jsx';
import TitleMessage from "./components/TitleMessages/titlemessage.jsx";
import About from "./pages/abouts/about.jsx";
import Skill from "./pages/skills/skill.jsx";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import { Parallax, Background } from "react-parallax";
import TimeLine from "./components/timelines/timeline.jsx";
function App() {
  return(
    <div className="App">
        <MyNavbar />
        <Carousels />
        <TitleMessage />
       <div>

        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={require("./assets/img/parallex/background.webp")}
            bgImageAlt=""
            strength={-200}
          >
            <div>
              <Container className="container-box rounded">
                <Fade top>
                  <hr />
                  <About />
                </Fade>
              </Container>
            </div>
          </Parallax>
        </div>
          <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr />
              <Skill />
            </Fade>
          </Container>
        </div>
       <div >
       <Container className="container-box rounded">
         <Slide bottom duration={1000}>
           <hr />
         <TimeLine />
     </Slide>
       </Container>
     </div>
    </div>
);
}

export default App;
