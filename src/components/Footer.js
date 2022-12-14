import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import shape from '../assets/img/shape.jpg'
import { Fade } from "react-reveal";

export const Footer = () => {
  return (
    <>
    <Fade bottom cascade>
      <footer className="footer">
        <div>
        </div>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="Icon" /></a>
                <a href="#"><img src={navIcon2} alt="Icon" /></a>
                <a href="#"><img src={navIcon3} alt="Icon" /></a>
                <a href="#"><img src={navIcon4} alt="Icon" /></a>
              </div>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
      </footer>
    </Fade>
    </>
  )
}
