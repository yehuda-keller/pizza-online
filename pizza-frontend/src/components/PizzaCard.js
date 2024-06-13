import React from 'react';
import { Card, Button } from 'react-bootstrap';

function PizzaCard({ title, price, description, image, buttonText, onClick, showButton }) {
    const imgStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    };

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    };

    return (
        <Card style={cardStyle}>
            <Card.Img style={imgStyle} variant="top" src={image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {price && <p>Price: ₪ {price}</p>}
                    {description}
                </Card.Text>
                {showButton && (
                    <div className="mt-auto">
                        <Button variant="primary" onClick={onClick}>Add</Button>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}

export default PizzaCard;
