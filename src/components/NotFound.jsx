import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function NotFound(){
    const err = useRouteError();

    return(
        
        <div className="error">
            <h2>{err.status} Page Not Found</h2>
            <p>Sorry, but we can not find the page you are looking for...</p>
            <Link to="/" className="backLink">
                Go Back
            </Link>
        </div>
    )
}

export default NotFound;