import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Style from "./Heading.module.css"

const Star = ({ head, secColor }) => {
    return (
        <>
            <h2 className={`mb-3 fs-1 fw-bolder pt-4 ${secColor ? Style.color : ''} text-center`}>{head}</h2>
            <div className={`${Style.icon} ${secColor ? Style.color : ''} position-relative d-flex justify-content-center align-items-center mb-3 gap-3`}><FontAwesomeIcon icon={faStar} /></div>
        </>
    )
}

export default Star
