import React from 'react'
import img35 from '../assets/img/Services-04.png'
import { Fade } from 'react-reveal';

export const Main = () => {

  return (
    <>
    <div className='bg-img'>
      <h1>PT Solusi Industri Energi</h1>
      <p>We provided Effective And Simple Solution For Your Industrial Needs</p>
      <button>Company Profile</button>
    </div>
    <div className='Wrapper'>
      <img src={img35} alt="" className='img35'/>
    </div>
    <Fade right cascade>
      <div className='about-layout'>
          <p className="text-about">ABOUT US</p>

          <h1>PT Solusi Industri Energi</h1>
          <br/>
          <h5>Established on the basis of the growth of the construction and industrial sectors in Indonesia which experienced a surge in value that continues to rise. And the construction sector in Indonesia has grown 7-8 percent.</h5>
            <br/>
          <h5>Our commitment in every service Engineering procurement and construction is the satisfaction of partners or customers, to realize the commitment We provide quality products and a team of experienced experts and professionals in their fields.</h5>
      </div>
    </Fade>
    </>
  )
}
