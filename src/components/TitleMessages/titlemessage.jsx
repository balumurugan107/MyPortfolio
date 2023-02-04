import Typewriter from 'typewriter-effect';
import React from 'react';
import styled from "styled-components";
import { Col, Container, Row } from 'react-bootstrap';
import "./titlemessage.css";
//styleing
const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  @media only screen and (max-width: 480px) and (min-width: 200px) 
{
  margin-top: -200px;
}
@media only screen and (min-width: 480px) 
{
  margin-top: -125px;
}
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;
const TitleMessage = () =>
   (
    <Container >
      <div xs={12}>
      <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span className='name'>
            <strong>Balasubramoniam</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Web Developer", "Enthusiastic", "Learner"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
    </div>
    </Container>
);

export default TitleMessage;
