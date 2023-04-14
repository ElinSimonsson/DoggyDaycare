import { Link } from "react-router-dom";
import dogLogo from '../assets/img/dog-logo.png'
import './header.css'

const Header = (props) => {
    

    return(
        <div className='header' >
            <header>
                <Link to= "/">
                    <img className='logo-img' src={dogLogo} alt="dog logo" />
                </Link>
            </header>
            <h1>{props.title}</h1>
      </div>
    )
}

export default Header;