import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Order from './components/Order';
import InfoComponent from './components/InfoComponent';
import NavBar from './components/NavBar';
import OrderDetails from './components/OrderDetails';
import OrderConfirmation from './components/OrderConfirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import MultiStepForm from "./components/MultiStepForm";

// Create OrderContext
const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

function App() {
    const [orderId, setOrderId] = useState('');

    return (
        <OrderContext.Provider value={{ orderId, setOrderId }}>
            <Router>
                <NavBar />
                <Container className="mt-3">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/form" element={<MultiStepForm />} /> {/* Ensure this route exists */}
                        <Route path="/order/:orderId" element={<OrderDetails />} />
                        <Route path="/order-confirmation" element={<OrderConfirmation />} />
                        <Route path="/infoComponent" element={<InfoComponent />} />
                    </Routes>
                </Container>
            </Router>
        </OrderContext.Provider>
    );
}

export default App;
