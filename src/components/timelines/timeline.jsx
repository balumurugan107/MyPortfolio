import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import "./mytimeline.css";
import Tindog from "./../../assets/img/projects/tindogimg.webp";
import Drumkit from "./../../assets/img/projects/drumkit.webp";
import Javascript from "./../../assets/img/projects/javascript_logo.webp";
import Goswim from "./../../assets/img/projects/goswim.jpg";
import Yevry from "./../../assets/img/projects/yevry.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_NPM from "../../assets/img/skills/npm.png";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_NEXT from "../../assets/img/skills/nextjs.svg";
import L_TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import Adviceimg from "./../../assets/img/projects/advice.webp";

function TimeLine() {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          <ImageEvent
            date="5/2022"
            className="text-center"
            text="Goswim"
            src={Goswim}
            alt="goswim_logo"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Provides vidoes to
                        educate, evaluate and makes better swimmer.
                        <hr className="m-4" />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Developed a web application using Next.js, a
                            React-based framework for{" "}
                            <strong>
                              server-side rendering and client-side rendering.
                            </strong>
                          </li>
                          <li>
                            Utilized server-side rendering to improve the
                            website's{" "}
                            <strong>
                              SEO, performance, and user experience
                            </strong>
                            , by pre-rendering the pages on the server and
                            sending HTML to the client rather than waiting for
                            JavaScript to load.
                          </li>
                        </ul>
                        <hr className="m-4" />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NEXT}
                                alt="Next_JS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              NextJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_TYPESCRIPT}
                                alt="Typescript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Typescript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Bootstrap4"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MaterialUI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <UrlButton href="https://www.goswim.tv/" target="_blank">
                SEE LIVE
              </UrlButton>
            </div>
          </ImageEvent>

          <ImageEvent
            date="4/2021"
            className="text-center"
            text="Yevry"
            src={Yevry}
            alt="yevry_logo"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>To Buy And Sell Vegetables,
                        Fruits, Flowers, Animals, And Seedlings Effortlessly.
                        <hr className="m-4" />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Developed a responsive web application using
                            React.js and React Bootstrap, leveraging components
                            and responsive design principles to ensure the
                            website looks great on all devices.
                          </li>
                          <li>
                            Utilized FileZilla to securely transfer files to and
                            from the server, ensuring the website is up-to-date
                            and functioning properly.
                          </li>
                        </ul>
                        <hr className="m-4" />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="ReactJS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ReactJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NPM}
                                alt="npm"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              NPM
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap4"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <UrlButton href="https://www.yevry.com/" target="_blank">
                SEE LIVE
              </UrlButton>
            </div>
          </ImageEvent>

          <ImageEvent
            date="11/2019"
            className="text-center"
            text="TinDog"
            src={Tindog}
            alt="dogs dating site"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app is created with
                        Bootstrap that helps in mating the dogs
                        <hr className="m-4" />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Dating site for dogs</li>
                          <li>
                            Powered by <strong>Bootstrap</strong>
                          </li>
                          <li>fun and imaginary app</li>
                        </ul>
                        <hr className="m-4" />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap4"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap4
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/balumurugan107/tindog"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="03/2020"
            className="text-center"
            text="Drumkit"
            src={Drumkit}
            alt="drums"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app is created with
                        Javascript that helps in mating the dogs
                        <hr className="m-2" />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>fun app for drum sounds</li>
                          <li>
                            Powered by <strong>Javascript</strong>
                          </li>
                          <li>DOM features used more</li>
                        </ul>
                        <hr className="m-4" />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Javascript}
                                alt="javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://balumurugan107.github.io/Drum-Kit/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/balumurugan107/Drum-Kit"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="06/2020"
            className="text-center"
            text="Advice-App"
            src={Adviceimg}
            alt="drums"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app is powered by{" "}
                        <strong>React</strong>
                        <hr className="m-4" />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It will suggest some advice</li>
                          <li>
                            Powered by <strong>React</strong>
                          </li>
                          <li>Advice data are fetch using fetch api</li>
                        </ul>
                        <hr className="m-4" />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Javascript}
                                alt="javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="react"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://romantic-franklin-c10eec.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/balumurugan107/advice-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
}

export default TimeLine;
