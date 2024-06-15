import React, { useEffect } from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import PizzaCard from './PizzaCard';
import useDataApi from './useDataApi';

function Menu() {
    const [{ data: pizzas, isLoading, isError }, setRequestConfig] = useDataApi('/pizzas', []);

    useEffect(() => {
        setRequestConfig({ url: '/pizzas', method: 'GET' });
    }, [setRequestConfig]);

    return (
        <Row className="App">
            {isError && <Alert variant="danger">There was an error fetching the pizza data.</Alert>}
            {isLoading ? (
                <Spinner animation="border" />
            ) : (
                pizzas.map((pizza, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <PizzaCard
                            title={pizza.title}
                            price={pizza.price}
                            description={pizza.description}
                            image={pizza.image}
                            showQuantity={false}
                        />
                    </Col>
                ))
            )}
        </Row>
    );
}

export default Menu;
