import { Helmet } from "react-helmet"
import Heading from "../Heading/Heading";

const About = () => {
  return (
    <>
      <Helmet>
        <title>about</title>
      </Helmet>
      <section className="main-color">
        <div className="container">
          <div className="dvh-100 d-flex justify-content-center align-items-center">
            <div className='text-white'>
              <Heading head='ABOUT COMPONENT' />
              <div className="row px-5">
                <div className="col-md-6 ps-md-5">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>
                <div className="col-md-6 pe-md-5">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
