import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../App'; // Ensure correct import path

const cardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px'
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

function OrderConfirmation() {
    const navigate = useNavigate();
    const { orderId } = useOrder();
    console.log('Order ID in OrderConfirmation:', orderId); // Log the order ID

    return (
        <Card style={cardStyles}>
            <Card.Body>
                <Card.Title>Order Confirmation</Card.Title>
                <div style={centeredTextStyles}>
                    <strong>Your order has been placed successfully!</strong>
                </div>
                <div style={centeredTextStyles}>
                    <strong>Order ID:</strong> {orderId}
                </div>
                <hr />
                <div style={buttonContainerStyles}>
                    <Button variant="primary" onClick={() => navigate('/')}>
                        Go to Home
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default OrderConfirmation;
