import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import questions from './questions.json';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {sendSurvey} from "../../../redux/actions/surveyActions";
import _ from "lodash";

const FitnessSurvey = () => {
    const [selectedOptions, setSelectedOptions] = useState({});

    const loggedUser = useSelector((state) => state.user?.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOptionChange = (question, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [question]: option,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/chat')
        dispatch(sendSurvey(selectedOptions))
    };

    if (_.isEmpty(loggedUser)) {
        return (
            <div className="main-content">
                <div className="chatbot-login-alert">
                    <h2>Please log in</h2>
                    <p>You need to be logged in to access the chatbot feature.</p>
                </div>
            </div>
        )
    }

    return (
        <Container className='d-flex justify-content-center align-items-center survey-form-container'>
            <Form onSubmit={handleSubmit} className="survey-form">
                <h4 className='mb-4 fw-semibold'>Tell us something more about yourself</h4>
                {questions.map((questionObj, qIndex) => (
                    <div key={qIndex} className='d-flex flex-column mb-4'>
                        <Label className="fw-bold mb-3">{questionObj.question}</Label>
                        <FormGroup tag="fieldset" className='survey-form-group'>
                            {questionObj.answers.map((option, index) => (
                                <FormGroup check key={index}>
                                    <Label check>{option.label}
                                        <Input
                                            type="radio"
                                            name={questionObj.question}
                                            value={option}
                                            checked={selectedOptions[questionObj.question] === option}
                                            onChange={() => handleOptionChange(questionObj.question, option)}
                                        />
                                        <span style={{marginLeft: '5px', marginRight: '10px'}}>{option}</span>
                                    </Label>
                                </FormGroup>
                            ))}
                        </FormGroup>
                    </div>
                ))}
                <Button className='main-blue survey-button' type="submit">
                    Continue
                </Button>
            </Form>
        </Container>
    );
};

export default FitnessSurvey;