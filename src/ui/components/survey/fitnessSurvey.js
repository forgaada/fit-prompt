import React, { useState } from 'react';
import {Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import questions from './questions.json';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendSurvey } from "../../../redux/actions/surveyActions";
import _ from "lodash";

const FitnessSurvey = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const questionsPerPage = 3;

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
        navigate('/chat');
        dispatch(sendSurvey(selectedOptions));
    };

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(questions.length / questionsPerPage) - 1));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

    const paginatedQuestions = questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage);
    const totalPages = Math.ceil(questions.length / questionsPerPage);
    if (_.isEmpty(loggedUser)) {
        return (
            <div className="main-content">
                <div className="chatbot-login-alert">
                    <h2>Please log in</h2>
                    <p>You need to be logged in to access the chatbot feature.</p>
                </div>
            </div>
        );
    }

    return (
        <Container className='d-flex justify-content-center align-items-center survey-form-container'>
            <Form className="survey-form">
                <h4 className='mb-4 fw-semibold align-content-center'>Fitness Survey for Prompt Generation</h4>
                <div className="progress-bar">
                    <div className="progress" style={{width: `${((currentPage + 1) / totalPages) * 100}%`}}></div>
                </div>
                {paginatedQuestions.map((questionObj, qIndex) => (
                    <div key={qIndex} className='d-flex flex-column mb-4'>
                        <Label className="fw-bold mb-3">{questionObj.question}</Label>
                        <FormGroup tag="fieldset" className='survey-form-group'>
                            {questionObj.answers.map((option, index) => (
                                <FormGroup check key={index}>
                                    <Label check>
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
                <div className="pagination-buttons">
                    <Button className='main-blue survey-button' type="button" onClick={prevPage}
                            disabled={currentPage === 0}>
                        Previous
                    </Button>
                    {currentPage === Math.ceil(questions.length / questionsPerPage) - 1 ? (
                        <Button className='main-blue survey-button' type="button" onClick={handleSubmit}>
                            Submit
                        </Button>
                    ) : (
                        <Button className='main-blue survey-button' type="button" onClick={nextPage}>
                            Next
                        </Button>
                    )}
                </div>
            </Form>
        </Container>
    );
};

export default FitnessSurvey;