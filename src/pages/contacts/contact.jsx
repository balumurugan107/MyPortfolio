import React from 'react';
import "./mycontact.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function mail(){
  window.open("https://www.upgrad.com/blog/front-end-developer-salary-in-india-for-freshers-experienced/#:~:text=The%20average%20entry%2Dlevel%20Front,in%20India%20is%20%E2%82%B9301%2C326.","_blank");
}
const Contact = () => (
  // <Container className='caroselContainer'>
    <Row>
      <Col xs={12}>
  <div id="Contact">
      <h1 className="pt-3 text-center font-details-b pb-3 footerHead">CONTACT ME</h1>
        <Row>
          <Col className="d-flex justify-content-center flex-wrap button-grp">
            <div className="m-2">
              <a href="mailto:balumurugan107@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="balumurugan107@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/balu-murugan-3b1125184/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a href="https://github.com/balumurugan107" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a href="https://twitter.com/balumurugan108" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/balu.murugan.77985" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
          </Col>
        </Row>
    </div>
    </Col>
    </Row>
    // </Container>
);
export default Contact;
