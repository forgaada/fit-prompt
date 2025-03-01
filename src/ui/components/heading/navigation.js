import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faPoll} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleRedirect = (page) => {
        navigate(page);
    }

    const getClassName = (pathname) => {
        if (location.pathname === pathname) {
            return "nav-icon nav-icon-active";
        } else return "nav-icon nav-icon-inactive";
    }

    return (
        <div className='page-navigation'>
            <FontAwesomeIcon
                icon={faPoll}
                size='xl'
                onClick={() => handleRedirect('/survey')}
                className={getClassName('/survey')}
            />
            <FontAwesomeIcon
                icon={faComments}
                size='xl'
                onClick={() => handleRedirect('/chat')}
                className={getClassName('/chat')}
            />
        </div>
    )
}

export default Navigation;