import React from 'react'
import './Footer.css'
import cardData from '../../Data/footerCard'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import dribble from '../../assets/images/dribble.png'
import behance from '../../assets/images/behance.png'
import arrow from '../../assets/images/arrow.svg'
export default function Footer() {
    
  return (
    <>
    
    <section className='footer'>
    <div className='mh-allCards'>
    <div className='mh-footerCards'>
    {cardData.map((card, index) => (
        <div key={index} className='footer-card'>
            <div className='MH-MEDIA'>
                <div className='mh-container'>
                  <img src={card.mhMedia} alt="" />
                </div>
                <div>
                  <button className='mh-arrow'><img src={card.mhaArrow} alt="" /></button>
                </div>
                
            </div>
            <div className='MH-FTEXT'>
            <h3>{card.heading}</h3>
            <p>{card.paragraph}</p>
            </div>
        </div>
    
  ))}
    </div>
    </div>
    
    <div className='MH-FOOTERLINKS'>
    <div className='MH-MOBILE'>
      <div className='mh-container'>
        <img src={instagram} alt="" />
      </div>
      <div className='mh-container'>
        <img src={twitter} alt="" />
      </div>
      <div className='mh-container'>
        <img src={dribble} alt="" />
      </div>
      <div className='mh-container'>
        <img src={behance} alt="" />
      </div>
    </div>
        <div className='mh-footerLinks'> 
          <div className='mh-Links'>
            <h3>Home</h3>
            <ul>
                <li>Why Us</li>
                <li>About Us</li>
                <li>Testimonials</li>
                <li>FAQ's</li>
            </ul>
          </div>
          <div className='mh-Links'>
            <h3>Services</h3>
            <ul>
                <li>Web Development</li>
                <li>App Development</li>
                <li>Web Design</li>
                <li>Digital Marketing</li>
            </ul>
          </div>
          <div className='mh-Links'>
            <h3>Projects</h3>
            <ul>
                <li>Klothink</li>
                <li>Zenith</li>
                <li>Novus</li>
                <li>Apex</li>
            </ul>
          </div>
          <div className='mh-Links'>
            <h3>Blogs</h3>
            <ul>
                <li>Business</li>
                <li>Design <span className='soon'>Soon</span></li>
                <li>Development <span className='soon'>Soon</span></li>
                
            </ul>
          </div>
        </div>
          <div className='mh-newsLetter'>
            <div className='mh-newsText'>
            <h4>NEWSLETTER</h4>
            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            </div>
            <div className='mh-newsInput'>
            <input type="text" placeholder='Enter your email' />
            <button className='mh-arrow'><img src={arrow} alt="" /></button>
            </div>
          </div>
          <div className='mh-rights'>
            <p>@2024 NwxGen.All rights reserved</p>
            <div className='mh-terms'>
            <p>Terms & Conditions</p>
              <p className='mh-privacy'> Privacy Policy</p>
              </div>
          </div>
    </div>
    </section>

</>)
}
