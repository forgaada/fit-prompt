import {Alert, Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";
import EmailAvatar from "./emailAvatar";
import {auth} from "../../../index";
import {signOutUser} from "../../../redux/actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const UserInfoModal = ({isOpen, toggleHandler}) => {
    const loggedUser = useSelector((state) => state.user?.user)
    const dispatch = useDispatch();
    const [showInfoAlert, setShowInfoAlert] = useState(false);

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(signOutUser())
                toggleInfoAlert();
            })
            .catch((err) => {
                console.log(err)
            })
        toggleHandler();
    }

    const toggleInfoAlert = () => {
        if (!showInfoAlert) {
            setTimeout(() => setShowInfoAlert(false), 2000)
        }
        setShowInfoAlert(!showInfoAlert)
    }

    return (
        <>
            <Modal isOpen={isOpen} size={"lg"} centered>
                <ModalHeader toggle={toggleHandler} style={{borderBottom: 'none'}}/>
                <ModalBody>
                    <div className='d-flex flex-column'>
                        {loggedUser.email ?
                            <EmailAvatar size='l' email={loggedUser.email} /> :
                            <FontAwesomeIcon icon={faUser} size='6x' className='mb-2 opacity-25'/>}
                        <div className='d-flex justify-content-center'>
                            <h3>{loggedUser.email ? loggedUser.email : "Anonymous"}</h3>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h5>You are logged in {loggedUser.email ? "with email" : "as a quest"}.</h5>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Row>
                        <Col>
                            <Button onClick={signOut} className='main-blue' id='data-cy-signout-button'>Sign out</Button>
                        </Col>
                    </Row>
                </ModalFooter>
            </Modal>
            {showInfoAlert &&
                <Alert className='alert-window' color="info" id="data-cy-signout-success">
                    User has been signed out.
                </Alert>
            }
        </>
    )
}

export default UserInfoModal;