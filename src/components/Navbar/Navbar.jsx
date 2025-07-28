import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        // function to know the navbar is scrolled or not
        const handleScroll = () => {
            window.scrollY > 0 ? setScroll(true) : setScroll(false);
        }
        window.addEventListener("scroll", handleScroll);
        // remove event after leave this component
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scroll ? 'py-2' : 'py-4'}`} >
            <div className="container">
                <Link className="navbar-brand fw-bolder fs-2 text-white" to="/">START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link rounded-pill px-2 text-white fw-bold" aria-current="page" to="/about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link rounded-pill px-2 text-white fw-bold" to="/portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link rounded-pill px-2 text-white fw-bold" to="/contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
