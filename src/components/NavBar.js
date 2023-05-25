import { useRef, useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Image,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";

import home from "../assets/home-24px.svg";
import welcome from "../assets/iPhone2X-Light-2@2x.png";
import choosePlan from "../assets/iPhoneX-Light@2x@2x.png";
import startTrip from "../assets/iPhoneX-Light-1@2x.png";
import downloadBtn from "../assets/get_app-24px.svg";
import arrowDown from "../assets/arrow_right_alt-24px.svg";
import arrowRight from "../assets/arrow_right_alt-24px(1).svg";
import smartPhone from "../assets/smartphone.svg";
import star from "../assets/grade-24px (1).svg";
import greenShirtGuy from "../assets/greenShirtGuy.png";
import twitter from "../assets/twitter (1).svg";
import linkedIn from "../assets/linkedin-logo (1).svg";
import facebook from "../assets/facebook-logo (1).svg";
import checkCircle from "../assets/check_circle_outline-24px (1).svg";
import supervised from "../assets/supervised_user_circle-24px (2).svg";
import assignmentTurned from "../assets/assignment_turned_in-24px.svg";
import layout from "../assets/layout.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [onHover, setOnHover] = useState(false);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const cardsList = [
    { count: "100+", name: "Projects Complete", id: "0", img: checkCircle },
    { count: "100+", name: "Active Projects", id: "1", img: assignmentTurned },
    { count: "90+", name: "Clients Satisfied", id: "2", img: supervised },
    { count: "56+", name: "Countries Available", id: "3", img: supervised },
  ];

  return (
    <Container sm={12} className="col-12" fluid>
      <Row className="main">
        <div className="navContainer">
          <div className="topMain">
            <Navbar expand="lg">
              <Navbar.Brand href="#home">
                <div className="brandContainerImg">
                  <Image src={home} alt="home" />
                </div>
                <div className="brandContainerText">
                  <h3>
                    <span style={{ fontSize: "25px", color: "blue" }}>
                      Apps
                    </span>
                    <span
                      style={{
                        fontSize: "25px",
                        color: "black",
                        paddingLeft: "5px",
                      }}
                    >
                      Market
                    </span>
                  </h3>
                </div>
              </Navbar.Brand>
              <div className="navInnerContainer">
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link
                      href="#home"
                      className={
                        activeLink === "home"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => onUpdateActiveLink("home")}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link
                      href="#services"
                      className={
                        activeLink === "services"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => onUpdateActiveLink("services")}
                    >
                      Services
                    </Nav.Link>
                    <Nav.Link
                      href="#why-us"
                      className={
                        activeLink === "why-us"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => onUpdateActiveLink("why-us")}
                    >
                      Why Us
                    </Nav.Link>
                    <Nav.Link
                      href="#our-goals"
                      className={
                        activeLink === "our-goals"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => onUpdateActiveLink("our-goals")}
                    >
                      Our Goals
                    </Nav.Link>
                    <Nav.Link
                      href="#our-portfolio"
                      className={
                        activeLink === "our-portfolio"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => onUpdateActiveLink("our-portfolio")}
                    >
                      Our Portfolio
                    </Nav.Link>
                    <Nav.Link
                      href="#our-clients"
                      className={
                        activeLink === "our-clients"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => onUpdateActiveLink("our-clients")}
                    >
                      Our Clients
                    </Nav.Link>
                    <Nav.Link
                      href="#contact-us"
                      className={
                        activeLink === "contact-us"
                          ? "active navbar-link"
                          : "navbar-link"
                      }
                      onClick={() => onUpdateActiveLink("contact-us")}
                    >
                      Contact Us
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
            <div className="topMainContainer">
              <div fluid className="textContainer">
                <div className="headingBox">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
                </div>
                <div className="contentBox">
                  <span>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                    Duis Consequat Id Mi Id Luctus. Nunc Pulvinar Nisl Id
                    Porttitor Cursus. Ut Non Mollis Nisl. Phasellus Sed Enim
                    Vestibulum, Dignissim Leo Id
                  </span>
                </div>
                <div className="btnBox">
                  <div>
                    <Button variant="light" size="lg">
                      Download Now
                      <Image
                        src={downloadBtn}
                        width={"20px"}
                        className="btnDownload"
                      />
                    </Button>
                  </div>
                  <div className="exploreMore">
                    <div>Explore More</div>
                    <div>
                      <Image src={arrowDown} width={"18px"} />
                    </div>
                  </div>
                </div>
              </div>
              <Row className="imageContainer">
                <Col lg={4} className="removeTopImage">
                  <Image src={choosePlan} className="leftImage" />
                </Col>
                <Col lg={4} className="removeTopImage">
                  <Image src={welcome} className="middleImage" />
                </Col>
                <Col lg={4} className="removeTopImage">
                  <Image src={startTrip} className="rightImage" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <Row>
          <Col xs={12} sm={12} className="containerBoxTwo">
            <Col className="headingTwo">
              Lorem ipsum dolor sit amet consectetur
            </Col>
            <Col xs={9} sm={12} className="headingTwoContent">
              Duis Consequat Id Mi Id Luctus. Nunc Pulvinar Nisl Id Porttitor
              Cursus. Ut Non Mollis Nisl. Phasellus Sed Enim Vestibulum
            </Col>
          </Col>
        </Row>
        <div>
          <div className="cardsContainer">
            <Row>
              <Col className="align-items-center" sm={12} md={6} lg={4}>
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={smartPhone} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "25px" }}
                      className="cardTitle"
                    >
                      Lorem Ipsum
                    </Card.Title>
                    <Card.Text className="cardText">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                      Duis Consequat Id Mi Id Luctus. Nunc Pulvinar Nisl Id
                      Porttitor Cursus.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="align-items-center" md={6} lg={4}>
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={layout} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "25px" }}
                      className="cardTitle"
                    >
                      Lorem Ipsum
                    </Card.Title>
                    <Card.Text className="cardText">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                      Duis Consequat Id Mi Id Luctus. Nunc Pulvinar Nisl Id
                      Porttitor Cursus.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="align-items-center" md={6} lg={4}>
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={smartPhone} />
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "25px" }}
                      className="cardTitle"
                    >
                      Lorem Ipsum
                    </Card.Title>
                    <Card.Text className="cardText">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                      Duis Consequat Id Mi Id Luctus. Nunc Pulvinar Nisl Id
                      Porttitor Cursus.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <Row>
          <Col className="containerBoxTwo">
            <Col xs={9} sm={12} className="headingTwo">
              Lorem ipsum dolor
            </Col>
            <Col
              xs={9}
              sm={12}
              style={{ color: "#707070" }}
              className="headingTwoContent"
            >
              Duis Consequat Id Mi Id Luctus. Nunc Pulvinar Nisl Id Porttitor
              Cursus. Ut Non Mollis Nisl. Phasellus Sed Enim Vestibulum
            </Col>
          </Col>
        </Row>
        <Row className="getMoreContainer">
          <Col className="getMoreImageBox">
            <Col className="trapezoid"></Col>
            <Col className="ellipseBig"></Col>
            <Col className="ellipseSmall"></Col>
            <Image
              lg={8}
              sm={12}
              className="getMoreImage"
              src={welcome}
              width={"376px"}
            />
          </Col>
          <Col className="getMoreContentBox">
            <Col className="headingThree">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
            </Col>
            <Col className="paragraph">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis
              Consequat Id Mi Id Luctus. Nunc Pulvinar Nisl Id Porttitor Cursus.
              Ut Non Mollis Nisl. Phasellus Sed Enim Vestibulum, Dignissim Leo
              Id
            </Col>
            <Col className="paragraph">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis
              Consequat Id Mi Id Luctus. Nunc Pulvinar Nisl Id Porttitor Cursus.
              Ut Non Mollis Nisl.
            </Col>
            <Col className="getMoreButtonBox">
              <Button className="getMoreBtn" variant="outline-primary">
                Get More
                <Image src={arrowRight} width={"35px"} />
              </Button>{" "}
            </Col>
          </Col>
        </Row>
        <Row>
          <Row className="containerBoxThree">
            <Col sm={8} className="headingFour">
              {windowSize[0] > 707 ? (
                <Col>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis
                  Consequatd
                </Col>
              ) : (
                <Col>Lorem Ipsum Dolor</Col>
              )}
            </Col>
            <Col className="headingThreeContent">
              {windowSize[0] > 707 ? (
                <Col xs={12} sm={8} lg={12}>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis
                  Consequat Id Mi It Is A Long Established Fact That
                </Col>
              ) : (
                <Col xs={12}>
                  It is a long established fact that a reader will be Distracted
                  By the readable content of a page when looking at its layout.
                  The point of using lorem
                </Col>
              )}
            </Col>
            <Row className="projectsBox">
              {cardsList.map((item, index) => {
                return (
                  <Col xs={12} lg={4} key={index} className="projectsInnerBox">
                    {/* <Row> */}
                    <Col xs={12} sm={3} className="imageColumn">
                      <Image
                        // lg={6}
                        src={item.img}
                        width={"50px"}
                        className="projectCountImage"
                      />{" "}
                    </Col>
                    <Col>
                      <Row className="projectCountCol">
                        <Col xs={2} sm={3}>
                          <span style={{ color: "blue" }}>{item.count}</span>
                          {item.name}
                        </Col>
                      </Row>
                    </Col>
                    {/* </Row> */}
                  </Col>
                );
              })}
            </Row>
          </Row>
        </Row>
        <Row>
          <Col sm={12}>
            <Col className="containerFour">
              <Col sm={12} lg={6} className="headingFive">
                Lorem Ipsum Dolor
              </Col>
              <Col sm={12} lg={8} className="headingFiveContent">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis
                Consequat Id Mi Id Luctus. Nunc Pulvinar Nisl Id Porttitor
                Cursus. Ut Non Mollis Nisl. Phasellus
              </Col>
            </Col>
          </Col>
        </Row>
        <Row>
          {windowSize[0] > 706 ? (
            <Col className="containerFive">
              <Col className="carouselImageBox">
                {/* <Col className="trapezoid2"></Col>
                <Col className="ellipseBig2"></Col>
                <Col className="ellipseSmall2"></Col> */}
                <Image
                  className="carouselImages"
                  src={welcome}
                  width={"376px"}
                  fluid="true"
                />
              </Col>
              <Col className="carouselImageBox">
                <Image
                  className="carouselImages"
                  src={choosePlan}
                  width={"376px"}
                  fluid="true"
                />
              </Col>
              <Col className="carouselImageBox">
                <Image
                  className="carouselImages"
                  src={startTrip}
                  width={"376px"}
                  fluid="true"
                />
              </Col>
              <Col className="carouselImageBox">
                <Image
                  className="carouselImages"
                  src={startTrip}
                  width={"376px"}
                  fluid="true"
                />
              </Col>
            </Col>
          ) : (
            <Carousel indicators={true}>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={welcome}
                  width={"376px"}
                  fluid="true"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={choosePlan}
                  width={"376px"}
                  fluid="true"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={startTrip}
                  width={"376px"}
                  fluid="true"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={startTrip}
                  width={"376px"}
                  fluid="true"
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          )}
        </Row>
        <Row>
          <Col className="containerSix">
            <Col className="containerSixInnerBox">
              <Col lg={12} sm={12} className="headingSix">
                Lorem Ipsum Dolor
              </Col>
              <Col lg={10} sm={12} className="headingSixContent">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis
                Consequat Id Mi Id Luctus. Nunc Pulvinar Nisl Id Porttitor
                Cursus. Ut Non Mollis Nisl. Phasellus Sed Enim
              </Col>
            </Col>
            {/* <div className="readMore"></div> */}
            <Col lg={2} sm={12} className="readMoreButtonBox">
              <Button className="getMoreBtn">
                Read More
                <Image src={arrowRight} width={"35px"} />
              </Button>{" "}
            </Col>
          </Col>
        </Row>
        <Row className="carouselBox">
          <Col lg={4} sm={6}>
            <Image
              className="carouselProfileImage"
              src={greenShirtGuy}
              width="300px"
              fluid
            />
          </Col>
          <Col lg={8} className="profileGuyInfoBox">
            <Col className="starBox">
              <Image className="star" width="33px" src={star} />
              <Image className="star" width="33px" src={star} />
              <Image className="star" width="33px" src={star} />
              <Image className="star" width="33px" src={star} />
              <Image className="star" width="33px" src={star} />
            </Col>
            <Col className="profileGuyInfo">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis
              Consequat Id Mi Id Luctus. Nunc Pulvinar Nisl Id Porttitor Cursus.
              Ut Non Mollis Nisl. Phasellus Sed Enim Vestibulum
            </Col>
            <Col className="profileGuyName">John Doe</Col>
            <Col className="profileGuyDesignation">
              Product Manager.{" "}
              <span style={{ color: "#333697" }}>@Lorem Ipsum</span>
            </Col>
          </Col>
        </Row>
        {/* <div> */}
        <Container>
          <Row className="footerOverlay">
            <Col sm={12} lg={6} className="headingSevenContainer">
              <Row className="headingSeven">Lorem Ipsum Dolor!</Row>
              <Row className="headingSevenContent">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis
                Consequat Id Mi Id Luctus.
              </Row>
            </Col>
            <Col sm={12} lg={6} className="formContainer">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    className="emailInput"
                    type="email"
                    placeholder="Enter email"
                  />
                  <Button
                    className="sendButton"
                    variant="primary"
                    type="submit"
                  >
                    Send
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="footerBox">
            <Row className="footerBoxTop">
              <Col lg={2} className="logo">
                <Col sm={2} className="innerLogoBox">
                  <Col
                    lg={12}
                    xs={1}
                    sm={12}
                    className="FooterBrandContainerImg"
                  >
                    <Image className="footerImage" src={home} alt="home" />
                  </Col>
                  <Col
                    lg={2}
                    xs={1}
                    sm={12}
                    className="FooterBrandContainerText"
                  >
                    <h3>
                      <span
                        className="logoName"
                        style={{ fontSize: "25px", color: "blue" }}
                      >
                        Apps
                      </span>
                      <span
                        className="logo2Name"
                        style={{
                          fontSize: "25px",
                          color: "black",
                          paddingLeft: "5px",
                        }}
                      >
                        Market
                      </span>
                    </h3>
                  </Col>
                </Col>
                <Col lg={3} xs={3} sm={6} className="socialMedia">
                  <Col>
                    <Image
                      className="socialMediaLogo"
                      width={"30px"}
                      height={"30px"}
                      src={facebook}
                    />
                  </Col>
                  <Col>
                    <Image
                      className="socialMediaLogo"
                      width={"30px"}
                      height={"30px"}
                      src={twitter}
                    />
                  </Col>
                  <Col>
                    <Image
                      className="socialMediaLogo"
                      width={"30px"}
                      height={"30px"}
                      src={linkedIn}
                    />
                  </Col>
                  <Col>
                    <Image
                      className="socialMediaLogo"
                      width={"30px"}
                      height={"30px"}
                      src={twitter}
                    />
                  </Col>
                </Col>
              </Col>
              <Col className="columns">
                <Col lg={3} sm={12} md={12} className="list">
                  <span className="spanTitle" style={{ marginLeft: "32px" }}>
                    Links
                  </span>
                  <ul>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Download</li>
                    <li>About</li>
                    <li>Service</li>
                  </ul>
                </Col>
                <Col lg={3} sm={12} md={12} className="list">
                  <span className="spanTitle" style={{ marginLeft: "32px" }}>
                    Support
                  </span>
                  <ul>
                    <li>FAQ</li>
                    <li>How it Works</li>
                    <li>Features</li>
                    <li>Contact</li>
                    <li>Reporting</li>
                  </ul>
                </Col>
                <Col lg={3} sm={12} md={12} className="list">
                  <span className="spanTitle" style={{ marginLeft: "32px" }}>
                    Contact Us
                  </span>
                  <ul>
                    <li>( 443 ) 718-0003</li>
                    <li>support@codaemon.com</li>
                    <li>
                      9912 Red Branch Road, Unit 260, Columbia, MD 21045, USA
                    </li>
                  </ul>
                </Col>
              </Col>
            </Row>
            <Row className="disclaimerBox">
              <Col lg={3} xs={12} sm={6} md={6} className="copyrightContainer">
                Copyright <div className="copyrightLogo">C</div> Codaemon LLC
                2023
              </Col>
              <Col lg={3} xs={12} sm={5} md={6} className="termsOfUse">
                Terms of Use
                <span style={{ margin: "0px 10px 0px 10px" }}> | </span>
                Privacy Policy
              </Col>
            </Row>
          </Row>
        </Container>
        {/* </div> */}
      </Row>
    </Container>
  );
};

export default NavBar;
