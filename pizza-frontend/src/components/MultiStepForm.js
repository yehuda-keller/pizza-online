import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PizzaCard from './PizzaCard';

const cardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px'
};

const cardBodyStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

const hrStyles = {
    margin: '20px 0'
};

const buttonStyles = {
    alignSelf: 'center'
};

function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [inputs, setInputs] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [pizzas, setPizzas] = useState([]); // State to hold the pizzas
    const navigate = useNavigate(); // Initialize the useNavigate hook

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await axios.get('/pizzas');
                setPizzas(response.data);
            } catch (error) {
                console.error("There was an error fetching the pizzas!", error);
            }
        };

        fetchPizzas();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleSelectPizza = (pizzaTitle) => {
        setInputs((values) => ({ ...values, selectedPizza: pizzaTitle }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = '/orders';
        const requestData = {
            phoneNumber: inputs.phonenumber,
            address: inputs.homeaddress,
            name: inputs.username,
            selectedPizza: inputs.selectedPizza
        };

        try {
            setIsLoading(true);
            await axios.post(url, requestData);
            navigate('/'); // Navigate to home page after successful submission
        } catch (error) {
            setIsError(true);
            console.error("There was an error submitting your data!", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {step === 1 && (
                <Card style={cardStyles}>
                    <Card.Body style={cardBodyStyles}>
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
                        <hr style={hrStyles} />
                        <Button variant="primary" onClick={handleNextStep} style={buttonStyles}>
                            Continue
                        </Button>
                    </Card.Body>
                </Card>
            )}

            {step === 2 && (
                <Card style={cardStyles}>
                    <Card.Body style={cardBodyStyles}>
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
                        <hr style={hrStyles} />
                        <Button variant="secondary" onClick={handlePreviousStep} className="me-2" style={buttonStyles}>
                            Back
                        </Button>

                        <Button variant="primary" onClick={handleNextStep} style={buttonStyles}>
                            Continue
                        </Button>
                    </Card.Body>
                </Card>
            )}

            {step === 3 && (
                <Card style={cardStyles}>
                    <Card.Body style={cardBodyStyles}>
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
                        <hr style={hrStyles} />
                        <Button variant="secondary" onClick={handlePreviousStep} className="me-2" style={buttonStyles}>
                            Back
                        </Button>
                        <Button variant="primary" onClick={handleNextStep} style={buttonStyles}>
                            Continue
                        </Button>
                    </Card.Body>
                </Card>
            )}

            {step === 4 && (
                <Card style={cardStyles}>
                    <Card.Body style={cardBodyStyles}>
                        <Card.Title>Select your pizza</Card.Title>
                        <Row>
                            {pizzas.map((pizza, index) => (
                                <Col key={index} md={4} className="mb-4">
                                    <PizzaCard {...pizza} onClick={() => handleSelectPizza(pizza.title)} showButton={true} />
                                </Col>
                            ))}
                        </Row>
                        <hr style={hrStyles} />
                        <Button variant="secondary" onClick={handlePreviousStep} className="me-2" style={buttonStyles}>
                            Back
                        </Button>
                        <Button variant="primary" onClick={handleNextStep} style={buttonStyles}>
                            Continue
                        </Button>
                    </Card.Body>
                </Card>
            )}

            {step === 5 && (
                <Card style={cardStyles}>
                    <Card.Body style={cardBodyStyles}>
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
                        <div className="mb-3">
                            <strong>Selected Pizza:</strong> {inputs.selectedPizza}
                        </div>
                        <hr style={hrStyles} />
                        <Button variant="secondary" onClick={handlePreviousStep} className="me-2" style={buttonStyles}>
                            Back
                        </Button>
                        <Button variant="success" type="submit" disabled={isLoading} style={buttonStyles}>
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </Card.Body>
                </Card>
            )}

            {isError && (
                <Card className="mt-3" style={cardStyles}>
                    <Card.Body style={cardBodyStyles}>
                        <Card.Title>Error</Card.Title>
                        <div>There was an error submitting your data. Please try again.</div>
                    </Card.Body>
                </Card>
            )}
        </Form>
    );
}

export default MultiStepForm;
