import { useEffect } from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {

   useEffect(() => {
    props.setHeaderTitle();
   }, []);
      

    return (
        <div className="welcome-div">
            <img className="welcome-dog-img" src="https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=1200:*" alt="picture of a dog" />
            <div className="welcome-button-container">
                <Link to="/dogs">
                    <button>Continue to see all dogs</button>
                </Link>
            </div>
        </div>
    ); 
}

export default Welcome;

