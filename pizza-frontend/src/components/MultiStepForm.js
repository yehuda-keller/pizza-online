import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PizzaCard from './PizzaCard';
import { useOrder } from '../App'; // Ensure correct import path
import './PizzaCard.css'; // Import the CSS file

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

const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
};

const centeredTextStyles = {
    textAlign: 'center',
    marginBottom: '20px'
};

function MultiStepForm() {
    const [step, setStep] = useState(() => parseInt(localStorage.getItem('step')) || 1);
    const [inputs, setInputs] = useState(() => JSON.parse(localStorage.getItem('inputs')) || {});
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [pizzas, setPizzas] = useState([]);
    const navigate = useNavigate();
    const { setOrderId } = useOrder(); // Use the setOrderId function from context

    useEffect(() => {
        localStorage.setItem('step', step);
    }, [step]);

    useEffect(() => {
        localStorage.setItem('inputs', JSON.stringify(inputs));
    }, [inputs]);

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
        if (validateStep(step)) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleQuantityChange = (pizzaTitle, quantity) => {
        const newInputs = { ...inputs, [pizzaTitle]: quantity };
        setInputs(newInputs);
        const selectedPizzas = Object.keys(newInputs)
            .filter((key) => pizzas.some((pizza) => pizza.title === key && newInputs[key] > 0))
            .map((title) => ({
                title,
                quantity: newInputs[title],
                price: pizzas.find((pizza) => pizza.title === title).price
            }));
        localStorage.setItem('cart', JSON.stringify(selectedPizzas));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateStep(step)) {
            return;
        }

        const selectedPizzas = Object.keys(inputs)
            .filter((key) => pizzas.some((pizza) => pizza.title === key && inputs[key] > 0))
            .map((title) => ({
                title,
                quantity: inputs[title],
                price: pizzas.find((pizza) => pizza.title === title).price * inputs[title]
            }));

        const requestData = {
            phoneNumber: inputs.phonenumber,
            address: `${inputs.streetname}, ${inputs.housenumber}, ${inputs.city}`,
            name: inputs.username,
            selectedPizzas: selectedPizzas
        };

        try {
            setIsLoading(true);
            const response = await axios.post('/orders', requestData);
            console.log('Server response:', response); // Log the full response object
            console.log('Server response data:', response.data); // Log the data field
            if (response.data.orderId) {
                console.log('Order ID from server:', response.data.orderId);
                setOrderId(response.data.orderId); // Save the order ID in context
                navigate('/order-confirmation'); // Navigate to order confirmation page
                localStorage.removeItem('step');
                localStorage.removeItem('inputs');
                localStorage.removeItem('cart');
            } else {
                console.error('Order ID not found in response');
            }
        } catch (error) {
            setIsError(true);
            console.error("There was an error submitting your data!", error);
        } finally {
            setIsLoading(false);
        }
    };

    const validateStep = (step) => {
        let newErrors = {};
        if (step === 1) {
            if (!inputs.phonenumber || !/^\d{10}$/.test(inputs.phonenumber)) {
                newErrors.phonenumber = "Phone number is required and should be 10 digits.";
            }
        } else if (step === 2) {
            if (!inputs.streetname) {
                newErrors.streetname = "Street name is required.";
            }
            if (!inputs.housenumber) {
                newErrors.housenumber = "House number is required.";
            }
            if (!inputs.city) {
                newErrors.city = "City name is required.";
            }
        } else if (step === 3) {
            if (!inputs.username) {
                newErrors.username = "Name is required.";
            }
        } else if (step === 5) {
            const selectedPizzas = Object.keys(inputs)
                .filter((key) => pizzas.some((pizza) => pizza.title === key && inputs[key] > 0));
            if (selectedPizzas.length === 0) {
                newErrors.selectedPizzas = "At least one pizza should be selected.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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
                                type="text"
                                name="phonenumber"
                                value={inputs.phonenumber || ""}
                                onChange={handleChange}
                                isInvalid={!!errors.phonenumber}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.phonenumber}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <hr style={hrStyles} />
                        <div style={buttonContainerStyles}>
                            <Button variant="primary" onClick={handleNextStep}>
                                Continue
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            )}

            {step === 2 && (
                <Card style={cardStyles}>
                    <Card.Body style={cardBodyStyles}>
                        <Card.Title>Home Address</Card.Title>
                        <Form.Group controlId="formStreetName">
                            <Form.Label>Street Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="streetname"
                                value={inputs.streetname || ""}
                                onChange={handleChange}
                                isInvalid={!!errors.streetname}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.streetname}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formHouseNumber">
                            <Form.Label>House Number:</Form.Label>
                            <Form.Control
                                type="text"
                                name="housenumber"
                                value={inputs.housenumber || ""}
                                onChange={handleChange}
                                isInvalid={!!errors.housenumber}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.housenumber}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formCity">
                            <Form.Label>City:</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={inputs.city || ""}
                                onChange={handleChange}
                                isInvalid={!!errors.city}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.city}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <hr style={hrStyles} />
                        <div style={buttonContainerStyles}>
                            <Button variant="secondary" onClick={handlePreviousStep} className="me-2">
                                Back
                            </Button>
                            <Button variant="primary" onClick={handleNextStep}>
                                Continue
                            </Button>
                        </div>
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
                                isInvalid={!!errors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <hr style={hrStyles} />
                        <div style={buttonContainerStyles}>
                            <Button variant="secondary" onClick={handlePreviousStep} className="me-2">
                                Back
                            </Button>
                            <Button variant="primary" onClick={handleNextStep}>
                                Continue
                            </Button>
                        </div>
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
                                    <PizzaCard
                                        {...pizza}
                                        showQuantity={true}
                                        onQuantityChange={handleQuantityChange}
                                    />
                                </Col>
                            ))}
                        </Row>
                        <hr style={hrStyles} />
                        <div style={buttonContainerStyles}>
                            <Button variant="secondary" onClick={handlePreviousStep} className="me-2">
                                Back
                            </Button>
                            <Button variant="primary" onClick={handleNextStep}>
                                Continue
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            )}

            {step === 5 && (
                <Card style={cardStyles}>
                    <Card.Body style={cardBodyStyles}>
                        <Card.Title>Review & Checkout</Card.Title>
                        <div className="mb-3">
                            <strong>Phone Number:</strong> {inputs.phonenumber}
                        </div>
                        <div className="mb-3">
                            <strong>Home Address:</strong> {`${inputs.streetname}, ${inputs.housenumber}, ${inputs.city}`}
                        </div>
                        <div className="mb-3">
                            <strong>Name:</strong> {inputs.username}
                        </div>
                        <div className="mb-3">
                            <strong>Selected Pizzas:</strong>
                            <ul>
                                {Object.keys(inputs)
                                    .filter((key) => pizzas.some((pizza) => pizza.title === key && inputs[key] > 0))
                                    .map((title) => (
                                        <li key={title}>
                                            {title}: {inputs[title]} - Total: ₪{inputs[title] * pizzas.find((pizza) => pizza.title === title).price}
                                        </li>
                                    ))}
                            </ul>
                            {errors.selectedPizzas && (
                                <div className="text-danger">{errors.selectedPizzas}</div>
                            )}
                        </div>
                        <hr style={hrStyles} />
                        <div style={centeredTextStyles}>
                            <strong>In order to find your order in the future, you must save the order code</strong>
                        </div>
                        <div style={buttonContainerStyles}>
                            <Button variant="secondary" onClick={handlePreviousStep} className="me-2">
                                Back
                            </Button>
                            <Button variant="success" type="submit" disabled={isLoading}>
                                {isLoading ? 'Submitting...' : 'Checkout'}
                            </Button>
                        </div>
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
