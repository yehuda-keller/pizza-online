import React, { useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import './PizzaCard.css';

const PizzaCard = ({ title, price, description, image, onQuantityChange, showQuantity }) => {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(0); // Reset quantity when component mounts or showQuantity changes
    }, [showQuantity]);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
        if (onQuantityChange) {
            onQuantityChange(title, newQuantity);
        }
    };

    return (
        <Card className="pizza-card">
            <Card.Img variant="top" src={image} className="pizza-card-img" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Price: ₪ {price}</Card.Text>
                {showQuantity && (
                    <>
                        <Form.Group controlId={`quantity-${title}`}>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                min="0"
                            />
                        </Form.Group>
                        <Card.Text>Total Price: ₪ {quantity * price}</Card.Text>
                    </>
                )}
            </Card.Body>
        </Card>
    );
};

export default PizzaCard;
