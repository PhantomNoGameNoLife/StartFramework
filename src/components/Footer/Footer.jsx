import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className='text-center p-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className='pt-3'>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3 className='pt-3'>AROUND THE WEB</h3>
              <ul className='list-unstyled d-flex flex-wrap justify-content-center align-items-center gap-2'>
                <li><a href="https://web.facebook.com/" target='_blank'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="https://x.com/" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="https://www.linkedin.com/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                <li><a href="https://google.com/" target='_blank'><FontAwesomeIcon icon={faGoogle} /></a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3 className='pt-3'>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </footer>
      <div className='p-3 copyright text-center'>
        <p className='pt-3'>Copyright © Your Website 2025</p>
      </div>
    </>
  )
}

export default Footer
