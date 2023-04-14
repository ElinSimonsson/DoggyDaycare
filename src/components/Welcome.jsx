import './welcome.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import largeDogPic from '../assets/img/dog1.jpeg'

const Welcome = (props) => {

   useEffect(() => {
    props.setHeaderTitle();
   }, []);

   const ContinueButton = () => (
        <div className="button-container">
            <Link to="/dogs">
                <button>Continue to see all dogs</button>
            </Link>
        </div>
   )

    return (
        <div className="welcome">
            <img className="dog-img" src={largeDogPic}  alt=""/>
            <ContinueButton />
        </div>
    ); 
}

export default Welcome;

