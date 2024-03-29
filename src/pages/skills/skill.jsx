import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../skills/myskills.css";

import skills from "./skilldata.js";
function Skill(){
  return(
    <div className="p-4 p-4" id="skills">
      <h1 className="text-center font-details-b pb-4">SKILLS</h1>
    <CardDeck className='justify-content-around'>
        <Row className="d-flex justify-content-around">
            <Col md={4} xs={12}>
            <Card className="focus mt-2 mb-2 cardDeck">
              <Card.Body>
                <Card.Title className="text-center  card-title">Frontend</Card.Title>
                <hr />
              <Card.Text className="card-text text-center card-content">
                    {skills.frontend.map((skill, index) => (
                      <span className="p-2" key={index}>
                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                          <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                        </a>
                      </span>
                    ))}
                    </Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col md={4} >
        <Card className="focus mt-2 mb-2 cardDeck style={{ width: '18rem' }} ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.hostingPlatforms.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>


            <Card className="focus mt-2 mb-2 cardDeck style={{ width: '18rem' }}" >
          <Card.Body>
            <Card.Title className="text-center  card-title">Version Control</Card.Title>
            <hr />
            <Card.Text className="card-text d-flex justify-content-start flex-column">
              <span className="p-2">
                <a className="text-dark text-decoration-none" href={skills.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                  <Image src={skills.versionControl[0].imgSrc} alt={skills.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {skills.versionControl[0].skillName}
                </a>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>


        <Card className="focus mt-2 mb-2 cardDeck style={{ width: '18rem' }}">
          <Card.Body>
            <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
            <hr />
            <Card.Text className="card-text d-flex justify-content-start flex-column">
              {skills.programmingLanguages.map((skill, index) => (
                <span className="p-2" key={index}>
                  <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                  </a>
                </span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
          </Col>

          <Col md={4}>
            <Card className="focus mt-2 mb-2 cardDeck style={{ width: '18rem' }} ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Other Skills</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.otherSkills.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none"  target="_blank" rel="noopener noreferrer">

                       <li>{skill.skillName}</li>
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
     </CardDeck>
 </div>
);
}
export default Skill;
