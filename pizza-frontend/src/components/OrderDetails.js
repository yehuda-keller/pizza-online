import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useDataApi from './useDataApi';
import { Card, Button, Container ,Badge} from 'react-bootstrap';
import axios from 'axios';

const OrderDetails = () => {
    const { orderId } = useParams();
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        `/orders/${orderId}`,
        {}
    );

    const navigate = useNavigate();

    useEffect(() => {
        doFetch({
            url: `/orders/${orderId}`,
            method: 'GET'
        });
    }, [orderId, doFetch]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/orders/${orderId}`);
            navigate('/');
        } catch (error) {
            console.error("There was an error deleting the order!", error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading order.</div>;
    }

    return (
        <Container>
            {data ? (
                <Card>
                    <Card.Header>Order #{data.id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{data.phoneNumber ? data.phoneNumber : 'Customer phoneNumber not available'}</Card.Title>
                        <Card.Text>
                            <strong>Name:</strong> {data.name ? data.name : 'Name not available'}
                        </Card.Text>
                        <Card.Text>
                            <strong>Address:</strong> {data.address ? data.address : 'Address not available'}
                        </Card.Text>
                        <Card.Text>
                            <strong>Order:</strong>
                            <ul>
                                {data.selectedPizzas && data.selectedPizzas.length > 0 ? (
                                    data.selectedPizzas.map((pizza, index) => (
                                        <li key={index}>
                                            {pizza.title}: <Badge bg="secondary">{pizza.quantity}</Badge>
                                            {pizza.price ? ` - ₪ ${pizza.price}` : ''}
                                        </li>
                                    ))
                                ) : (
                                    <li>Order not available</li>
                                )}
                            </ul>
                        </Card.Text>
                        <Button variant="danger" onClick={handleDelete}>Delete Order</Button>
                    </Card.Body>
                </Card>
            ) : (
                <div>No order found.</div>
            )}
        </Container>
    );
};

export default OrderDetails;
