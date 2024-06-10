import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
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
        buttonText: "Add to Cart"
    },
    {
        title: "White Pizza",
        price: 75.00,
        description: "Delicious pizza with a creamy white sauce, mozzarella cheese, and your choice of toppings.",
        image: WhitePizza,
        buttonText: "Add to Cart"
    },
    {
        title: "Green Pizza",
        price: 77.00,
        description: "Healthy pizza topped with a variety of green vegetables like spinach, broccoli, and bell peppers, along with mozzarella cheese.",
        image: greenPizza,
        buttonText: "Add to Cart"
    },
    {
        title: "Truffle Pizza",
        price: 77.00,
        description: "Gourmet pizza featuring truffle oil, mushrooms, mozzarella cheese, and a touch of garlic.",
        image: trufflePizza,
        buttonText: "Add to Cart"
    },
    {
        title: "Vegan Pizza",
        price: 69.00,
        description: "Plant-based pizza with vegan cheese, a variety of fresh vegetables, and flavorful marinara sauce.",
        image: veganPizza,
        buttonText: "Add to Cart"
    },
    {
        title: "Zucchini Pizza",
        price: 77.00,
        description: "Light and refreshing pizza topped with thinly sliced zucchini, cherry tomatoes, mozzarella cheese, and fresh basil.",
        image: zucchiniPizza,
        buttonText: "Add to Cart"
    }
];

function Menu() {
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
        <Row className="App">
            {cardInfo.map((card, index) => (
                <Col key={index} md={4} className="mb-4">
                    <Card style={cardStyle}>
                        <Card.Img style={imgStyle} variant="top" src={card.image} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                                {card.price && <p>Price: ₪ {card.price}</p>}
                                {card.description}
                            </Card.Text>
                            <div className="mt-auto">
                                <Button variant="primary">{card.buttonText}</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Menu;