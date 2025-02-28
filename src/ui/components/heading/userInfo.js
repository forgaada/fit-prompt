import {Label} from "reactstrap";
import {useState} from "react";
import LoginModal from "./LoginModal";
import {useSelector} from "react-redux";
import _ from 'lodash';
import EmailAvatar from "./emailAvatar";
import UserInfoModal from "./UserInfoModal";

/**
 * Field containing information about signed user (with modal window).
 */
const UserInfo = () => {
    const loggedUser = useSelector((state) => state.user?.user)
    const [showModal, setshowModal] = useState(false);
    const [logInModal, setLogInModal] = useState(false);

    const toggleUserInfo = () => {
        setshowModal(!showModal)
    }

    const toggleLogIn = () => {
        setLogInModal(!logInModal)
    }

    return (
        <>
            <div className='d-flex align-items-center cursor-pointer fa-icon-red' style={{marginRight: '15px'}}
                 onClick={!_.isEmpty(loggedUser) ? toggleUserInfo : toggleLogIn}>
                {!_.isEmpty(loggedUser) ?
                    <EmailAvatar email={loggedUser.email || 'Anonymous'} /> :
                    <Label style={{marginLeft: '10px'}} className='cursor-pointer fw-semibold secondary-text' id='data-cy-login-label'>Log in</Label>
                }
            </div>
            <UserInfoModal isOpen={showModal} toggleHandler={toggleUserInfo}/>
            <LoginModal isOpen={logInModal} toggleHandler={toggleLogIn}/>
        </>
    )
}

export default UserInfo;
