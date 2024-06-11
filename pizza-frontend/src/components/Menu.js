import React from 'react';
import { Row, Col } from 'react-bootstrap';
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
        image: margarita
    },
    {
        title: "White Pizza",
        price: 75.00,
        description: "Delicious pizza with a creamy white sauce, mozzarella cheese, and your choice of toppings.",
        image: WhitePizza
    },
    {
        title: "Green Pizza",
        price: 77.00,
        description: "Healthy pizza topped with a variety of green vegetables like spinach, broccoli, and bell peppers, along with mozzarella cheese.",
        image: greenPizza
    },
    {
        title: "Truffle Pizza",
        price: 77.00,
        description: "Gourmet pizza featuring truffle oil, mushrooms, mozzarella cheese, and a touch of garlic.",
        image: trufflePizza
    },
    {
        title: "Vegan Pizza",
        price: 69.00,
        description: "Plant-based pizza with vegan cheese, a variety of fresh vegetables, and flavorful marinara sauce.",
        image: veganPizza
    },
    {
        title: "Zucchini Pizza",
        price: 77.00,
        description: "Light and refreshing pizza topped with thinly sliced zucchini, cherry tomatoes, mozzarella cheese, and fresh basil.",
        image: zucchiniPizza
    }
];

function Menu() {
    return (
        <Row className="App">
            {cardInfo.map((card, index) => (
                <Col key={index} md={4} className="mb-4">
                    <PizzaCard {...card} showButton={false} />
                </Col>
            ))}
        </Row>
    );
}

export default Menu;
