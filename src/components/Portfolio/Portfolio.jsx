import { Helmet } from 'react-helmet'
import Heading from "../Heading/Heading"
import Style from './Portfolio.module.css'
import html from "./../../assets/1.png"
import css from "./../../assets/2.jpg"
import js from "./../../assets/3.png"
import btsp from "./../../assets/4.webp"
import tw from "./../../assets/5.webp"
import rct from "./../../assets/6.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const imgs = [html, css, js, btsp, tw, rct];

const Portfolio = () => {
  const [imgName, setImgName] = useState(null);
  return (
    <>
      <Helmet>
        <title>portfolio</title>
      </Helmet>
      <section className='pb-5'>
        <div className="container">
          <div className="dvh-100 d-flex justify-content-center align-items-center">
            <div className='text-white'>
              <Heading head='PORTFOLIO COMPONENT' secColor={true} />
              <div className="portfolio row g-5">
                {imgs.map((name, idx) => {
                  return (
                    <div key={idx} className={`card-item col-md-4 ${Style.divImg}`} onClick={() => setImgName(name)} data-bs-toggle="modal" data-bs-target="#modal">
                      <img className={`w-100 ${Style.ratio}`} src={name} alt='portfolioImg' />
                      <div className={`${Style.layer}`}>
                        <FontAwesomeIcon icon={faPlus} className='fa-5x' />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img id='imgModel' className='w-100' src={imgName} alt="modelImg" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
