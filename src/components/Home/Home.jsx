import Heading from "../Heading/Heading";
import avatar from "./../../assets/avatar.svg"
import Style from "./Home.module.css"
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>home</title>
            </Helmet>
            <section className="main-color">
                <div className="container">
                    <div className="dvh-100 d-flex justify-content-center align-items-center">
                        <div className='text-white text-center'>
                            <img className={`${Style.w250} mb-3 d-inline-block`} src={avatar} alt="avatar" />
                            <Heading head='START FRAMEWORK' />
                            <p>Graphic Artist - Web Designer - Illustrator</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
