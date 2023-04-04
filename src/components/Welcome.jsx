import { Link } from "react-router-dom";

const Welcome = () => {

    return (
        <div>
            <Link to="/dogs">
            <button>See all dogs</button>
         </Link>
        </div>
    ); 
}

export default Welcome;

