import React from 'react'
import img35 from '../assets/img/about.jpg'
import { Fade } from 'react-reveal';
import { Container,Row, Col } from 'react-bootstrap';
import service01 from '../assets/img/Services-01.jpg';
import service02 from '../assets/img/Services-02.jpg';
import service03 from '../assets/img/Services-03.jpg';
import service04 from '../assets/img/Services-04.jpg';
import service05 from '../assets/img/Services-05.jpg';
import service06 from '../assets/img/Services-06.jpg';


export const Main = () => {

  return (
    <>
    <div className='bg-img'>
      <Fade left cascade>
        <h1>PT Solusi Industri Energi</h1>
        <p>We provided Effective And Simple Solution For Your Industrial Needs</p>
      </Fade>
      <button>Company Profile</button>
    </div>
    <div className='wrapper'>
      <img src={img35} alt="" className='img35'/>
      <Fade right cascade>
        <div className='about-layout'>
            <p className="text-about">ABOUT US</p>

            <h1>PT Solusi Industri Energi</h1>
            <br/>
            <h5>Established on the basis of the growth of the construction and industrial sectors in Indonesia which experienced a surge in value that continues to rise. And the construction sector in Indonesia has grown 7-8 percent.</h5>
              <br/>
            <h5>Our commitment in every service Engineering procurement and construction is the satisfaction of partners or customers, to realize the commitment We provide quality products and a team of experienced experts and professionals in their fields.</h5>
            <a href="#about">About Us</a>
        </div>
      </Fade>
    </div>
    <Fade bottom cascade>
      <Container className='services-layout'>
        <div className='text-services'>Our Services</div>
        <h2 className='services-text'>What We do</h2>
        <Row xs={1}>
          <Col>
            <div className='content-wrapper'>
              <img src={service01} alt="No Internet Connection"/>
              <div className='overlay'>
                <div className='text-content'>Piping Fabrication & Installation</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className='content-wrapper'>
              <img src={service02} alt="No Internet Connection"/>
              <div className='overlay'>
                <div className='text-content'>Mechanical & Installation</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className='content-wrapper'>
              <img src={service03} alt="No Internet Connection"/>
              <div className='overlay'>
                <div className='text-content'>Heavy Lifting</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='services-layout'>
        <Row xs={1}>
          <Col>
            <div className='content-wrapper'>
              <img src={service04} alt="No Internet Connection"/>
              <div className='overlay'>
                <div className='text-content'>Civil Engineering</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className='content-wrapper'>
              <img src={service05} alt="No Internet Connection"/>
              <div className='overlay'>
                <div className='text-content'>Procurement Services & General Supplies</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className='content-wrapper'>
              <img src={service06} alt="No Internet Connection"/>
              <div className='overlay'>
                <div className='text-content'>Special Services</div>
              </div>
            </div>
          </Col>
        </Row>
        <div className='detail'>
          <a href='#services'>Go For Detail</a>
        </div>
      </Container>
    </Fade>
    </>
  )
}
