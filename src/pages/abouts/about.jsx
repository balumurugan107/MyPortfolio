import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from "../../assets/img/profile/baluimg.webp";
import "../abouts/myabout.css";
import Button from 'react-bootstrap/Button';
function About() {
  return (<div id="about">
  <div className="about">
  <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>

  <Container>
    <Row>
      <Col xs={12} md={6}>
        <Row className="justify-content-center mb-2 mr-2 ">
          <Image className="profile" src={Profile} roundedCircle="boolean"/>
        </Row>
      </Col>
      <Col xs={12} md={6}>
        <Row className="align-items-start p-2 my-details rounded">
          Hi there! I am <strong>&nbsp;Balasubramoniam</strong>
        <br />A passionate programmer , born and brought up in India. I am a Frontend Web Developer with React.js, Redux, javascript, react-bootstrap as my tech stack.
              <br />
              I'm a final year student, I will successfully complete my Engineering with specialization in 'Electronics and communication' in 2021.
              <br />
              I haven't Worked with the clients till, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
              <br />
              I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
              <br /> <br />
              <Col className="d-flex justify-content-center flex-wrap">
                <div>
                  <a href="#contact">
                    <Button className="m-2" variant="outline-primary">
                      Let's talk
                    </Button>
                  </a>
                </div>
                <div>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Button className="m-2" variant="outline-success">
                      My Resume
                    </Button>
                  </a>
                </div>

                <div>
                  <a href="https://www.linkedin.com/in/balu-murugan-3b1125184/" target="_blank" rel="noopener noreferrer">
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
      </Col>
    </Row>
  </Col>
</Row>
  </Container>
</div>
</div>
);
}

export default About;
