import { Link } from "react-router-dom";

const Header = (props) => {

    const updateHeaderTitle = (title) => {
        props.setHeaderTitle(title);
      }
    

    return(
        <div className='header'>
        <header className='header-logo'>
          <Link to= "/">
            <img className='logo-img' src="https://lh3.googleusercontent.com/pw/AMWts8Bna1cOJnTcyaNgvRXtrLqJGk4nojaKKJpU7Sgo5PQm_To2jHqHI3rw7Yjq78c8iuNCU0Vmlw4DfghwMTA86o6TOCpFdZe0IeoHT-3IZU-RGqUu4GUGzFmmvBhb4iDiJwfTWyXeRMSslchacEbGrP2tsAWj3O9LJ42P0YDXKvc-w1VS8vdt09sNvlU55K3LrVfmznmkF4i7lDHZgu7XSHPDcA5pAC05JOxG8aa_CfGqra1y3-C4ujBQo63xNmwb4Kq19DJRUBqTz0kckAi6gjo4sBEKtNOrhyKrzbbgzB-cd7cI_0ZK0k4XB0tcyh3ff6_lF0zNDLzTD67ygRIBFzBpLNth9i5Jo5IEv5LIxulznbXF49-bFlw73c_gZCJepbWN9uXSVLgqqaY01tnY3u1IJ1q3ey--inKtNHmuk8GjJADueGWj0_6SWbN-h2UmDqvxW7ZBNm4Q6K-vXQDx5NJ0NjOvNeJhIP-Au41Eo2yFnpRzfnHHghOKqaZ3U2uAwGJ8xB5k63nFGwrB89P7ro2ub5ttspF04VHBvPuogAAO2vqu68ToFhM0rZX4W3cI-hWNrNilN08v8oRPxuescgHNo833iDpsgvHOS7HsSDznEGI7gp8dDrr1NxfCuTyos1vaUcP8a2-rjtmQAghKcJFVnBEJVVpIZY7ZLfHfh9UkbUEKORxLuX-cvTwx59R1uMqsqTaFCW9xdfo4yT6EqQVSJDJlFSfhd00Q7oL8W1wOxgYmg8_WKkT2PxURdMzJquOl8phOCkLhhCXUyCGVoOA6gNDprXh4pFwyOFjZCAv_qSkYDctgRwIiR7YgeJY-dmQ_wH4pMd1X6JylwzucnQSJBtLfwJPv2lrk7WAaDLqK3LtAONeJDFBXCtfhb00BYKaZuyIEO6_kkGMblVYCAqFdzdrgOKvxpjNyUWbn3H69Nm7FdgggC0jh8ZE=w833-h833-s-no?authuser=0" alt="err" />
          </Link>
        </header>
        <h1>{props.title}</h1>
      </div>
    )
}

export default Header;