import React, { useState, useRef, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import questions from './questions.json';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendSurvey } from "../../../redux/actions/surveyActions";
import ProgressBar from "./progressBar";

const FitnessSurvey = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const questionsPerPage = 4;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formRef = useRef(null);

    useEffect(() => {
        if (formRef.current && currentPage > 0) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

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

    return (
        <Container className='d-flex justify-content-center align-items-center survey-form-container' ref={formRef}>
            <Form className="survey-form">
                <ProgressBar currentPage={currentPage} totalPages={totalPages} />
                <h4 className='mb-4 fw-semibold align-content-center'>Fitness Survey for Prompt Generation</h4>
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
                                        <span style={{ marginLeft: '5px', marginRight: '10px' }}>{option}</span>
                                    </Label>
                                </FormGroup>
                            ))}
                        </FormGroup>
                    </div>
                ))}
                <div className="pagination-buttons">
                    <Button className='main-blue survey-button' type="button" onClick={prevPage} disabled={currentPage === 0}>
                        Previous
                    </Button>
                    {currentPage === totalPages - 1 ? (
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
