import React from "react";
import './App.css';
import Carousels from './components/carousels/carousel.jsx';
import MyNavbar from './components/Navbar/navbar.jsx';
import TitleMessage from "./components/TitleMessages/titlemessage.jsx";
import About from "./pages/abouts/about.jsx";
import Skill from "./pages/skills/skill.jsx";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import {
  Parallax,
  Background
} from "react-parallax";
import TimeLine from "./components/timelines/timeline.jsx";
import Contact from "./pages/contacts/contact.jsx";
import FooterPanel from "./pages/footers/footer.jsx";
import Particles from "react-particles-js";
import {particlesOptions} from "./particlesOption.js";

function App() {
  return ( <
    div className = "App"
    style = {
      {
        position: "relative"
      }
    } >
    <MyNavbar / >
    <Carousels / >
    <TitleMessage / >
    <Particles className = "particles particles-box"
    params = {particlesOptions}
    />
    <div >

    <Parallax
     blur = {{  min: -30,max: 30}}
    bgImage = {require("./assets/img/parallex/background.webp")  }
    bgImageAlt = ""
    strength = {-200} >
    <div >
    <Container className = "container-box rounded" >
    <Fade top >
    <hr / >
    <About / >
    </Fade> </Container> </div>
    </Parallax>
     </div>
     <div >
    <
    Container className = "container-box rounded" >
    <
    Fade duration = {
      500
    } >
    <
    hr / >
    <
    Skill / >
    <
    /Fade> <
    /Container> <
    /div> <
    div >
    <
    Container className = "container-box rounded" >
    <
    Slide bottom duration = {
      1000
    } >
    <
    hr / >
    <TimeLine / >
    </Slide>
     </Container>
     </div>
      <div >
    <Container className = "container-box rounded" >
    <Slide bottom duration = {1000} >
    <hr / >
    <Contact / >
    </Slide>
    </Container>
     </div>
     <FooterPanel / >
    <hr / >
    </div>
  );
}

export default App;
