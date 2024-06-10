import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import useDataApi from './useDataApi';

function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [inputs, setInputs] = useState({});
    const [{ data, isLoading, isError }, setRequestConfig] = useDataApi('', {});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitting data:", inputs);  // Log inputs to debug

        const url = '/orders';
        const requestData = inputs;

        setRequestConfig({
            url,
            method: 'POST',
            data: requestData,
        });
    };

    useEffect(() => {
        if (data) {
            console.log("Response data:", data);  // Log response data for debugging
        }
    }, [data]);

    return (
        <Form onSubmit={handleSubmit}>
            {step === 1 && (
                <Card>
                    <Card.Body>
                        <Card.Title>Phone Number</Card.Title>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone Number:</Form.Label>
                            <Form.Control
                                type="number"
                                name="phonenumber"
                                value={inputs.phonenumber || ""}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleNextStep}>
                            Continue
                        </Button>
                    </Card.Body>
                </Card>
            )}

            {step === 2 && (
                <Card>
                    <Card.Body>
                        <Card.Title>Home Address</Card.Title>
                        <Form.Group controlId="formHomeAddress">
                            <Form.Label>Home Address:</Form.Label>
                            <Form.Control
                                type="text"
                                name="homeaddress"
                                value={inputs.homeaddress || ""}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePreviousStep} className="me-2">
                            Back
                        </Button>
                        <Button variant="primary" onClick={handleNextStep}>
                            Continue
                        </Button>
                    </Card.Body>
                </Card>
            )}

            {step === 3 && (
                <Card>
                    <Card.Body>
                        <Card.Title>Name</Card.Title>
                        <Form.Group controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={inputs.username || ""}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handlePreviousStep} className="me-2">
                            Back
                        </Button>
                        <Button variant="primary" onClick={handleNextStep}>
                            Continue
                        </Button>
                    </Card.Body>
                </Card>
            )}

            {step === 4 && (
                <Card>
                    <Card.Body>
                        <Card.Title>Review & Submit</Card.Title>
                        <div className="mb-3">
                            <strong>Phone Number:</strong> {inputs.phonenumber}
                        </div>
                        <div className="mb-3">
                            <strong>Home Address:</strong> {inputs.homeaddress}
                        </div>
                        <div className="mb-3">
                            <strong>Name:</strong> {inputs.username}
                        </div>
                        <Button variant="secondary" onClick={handlePreviousStep} className="me-2">
                            Back
                        </Button>
                        <Button variant="success" type="submit" disabled={isLoading}>
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </Card.Body>
                </Card>
            )}

            {isError && (
                <Card className="mt-3">
                    <Card.Body>
                        <Card.Title>Error</Card.Title>
                        <div>There was an error submitting your data. Please try again.</div>
                    </Card.Body>
                </Card>
            )}

            {data && (
                <Card className="mt-3">
                    <Card.Body>
                        <Card.Title>Result</Card.Title>
                        <div>Result is {JSON.stringify(data)}</div>
                    </Card.Body>
                </Card>
            )}
        </Form>
    );
}

export default MultiStepForm;
