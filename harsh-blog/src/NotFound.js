import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry</h1>
            <p>The page is not found</p>
            <Link to={"/"}>Back to homepage...</Link>
        </div>
    )
}

export default NotFound;