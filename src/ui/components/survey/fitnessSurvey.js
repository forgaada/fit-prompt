import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import questions from './questions.json';

const FitnessSurvey = () => {
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionChange = (question, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [question]: option,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOptions);
    };

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
                                        <span style={{marginLeft: '5px', marginRight: '5px'}}>{option}</span>
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