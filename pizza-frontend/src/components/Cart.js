import React, { useState, useEffect } from 'react';
import { useOrder } from '../App';

function Cart() {
    const { orderId } = useOrder();
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    const [isCheckedOut, setIsCheckedOut] = useState(false);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart) {
            setCart(savedCart);
        }
    }, []);

    const handleCheckout = () => {
        setIsCheckedOut(true);
        setCart([]);
        localStorage.removeItem('cart');
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {!isCheckedOut ? (
                <>
                    {cart.length > 0 ? (
                        <div>
                            <h2>Order Summary</h2>
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index}>
                                        {item.title}: {item.quantity} x ₪{item.price} = ₪{item.quantity * item.price}
                                    </li>
                                ))}
                            </ul>
                            <h3>Total: ₪{calculateTotalPrice()}</h3>
                            <button onClick={handleCheckout}>Checkout</button>
                        </div>
                    ) : (
                        <h2>Your cart is empty</h2>
                    )}
                </>
            ) : (
                <h2>We are currently under renovations</h2>
            )}
        </div>
    );
}

export default Cart;
