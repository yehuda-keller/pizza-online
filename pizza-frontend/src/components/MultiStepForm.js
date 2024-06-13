import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import useDataApi from './useDataApi';
import PizzaCard from './PizzaCard';
import margarita from '../image/margarita.png';
import WhitePizza from '../image/WhitePizza.png';
import greenPizza from '../image/greenPizza.png';
import trufflePizza from '../image/TrufflePizza.png';
import veganPizza from '../image/VeganPizza.png';
import zucchiniPizza from '../image/ZucchiniPizza.png';

const cardInfo = [
    {
        title: "Margherita Pizza",
        price: 75.00,
        description: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil leaves.",
        image: margarita,
        buttonText: "Select"
    },
    {
        title: "White Pizza",
        price: 75.00,
        description: "Delicious pizza with a creamy white sauce, mozzarella cheese, and your choice of toppings.",
        image: WhitePizza,
        buttonText: "Select"
    },
    {
        title: "Green Pizza",
        price: 77.00,
        description: "Healthy pizza topped with a variety of green vegetables like spinach, broccoli, and bell peppers, along with mozzarella cheese.",
        image: greenPizza,
        buttonText: "Select"
    },
    {
        title: "Truffle Pizza",
        price: 77.00,
        description: "Gourmet pizza featuring truffle oil, mushrooms, mozzarella cheese, and a touch of garlic.",
        image: trufflePizza,
        buttonText: "Select"
    },
    {
        title: "Vegan Pizza",
        price: 69.00,
        description: "Plant-based pizza with vegan cheese, a variety of fresh vegetables, and flavorful marinara sauce.",
        image: veganPizza,
        buttonText: "Select"
    },
    {
        title: "Zucchini Pizza",
        price: 77.00,
        description: "Light and refreshing pizza topped with thinly sliced zucchini, cherry tomatoes, mozzarella cheese, and fresh basil.",
        image: zucchiniPizza,
        buttonText: "Select"
    }
];

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
    const [{ data, isLoading, isError }, setRequestConfig] = useDataApi('', {});

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

        setRequestConfig({
            url,
            method: 'POST',
            data: requestData,
        });
    };

    useEffect(() => {
        if (data) {
            console.log("Response data:", data);
        }
    }, [data]);

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
                            {cardInfo.map((card, index) => (
                                <Col key={index} md={4} className="mb-4">
                                    <PizzaCard {...card} onClick={() => handleSelectPizza(card.title)} showButton={true} />
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

            {data && (
                <Card className="mt-3" style={cardStyles}>
                    <Card.Body style={cardBodyStyles}>
                        <Card.Title>Result</Card.Title>
                        <div>Result is {JSON.stringify(data)}</div>
                    </Card.Body>
                </Card>
            )}
        </Form>
    );
}

export default MultiStepForm;
