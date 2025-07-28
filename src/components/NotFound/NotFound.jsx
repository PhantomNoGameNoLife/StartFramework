import { Helmet } from "react-helmet"

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>NotFound</title>
            </Helmet>
            <div>
                <h2 className='fs-1 fw-bolder'>not-found works!</h2>
            </div>
        </>
    )
}

export default NotFound
