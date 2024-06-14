import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import MultiStepForm from './components/MultiStepForm';
import InfoComponent from './components/InfoComponent';
import NavBar from './components/NavBar';
import OrderDetails from './components/OrderDetails';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [orderId, setOrderId] = useState('');

    return (
        <Router>
            <NavBar setOrderId={setOrderId} />
            <Container className="mt-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/form" element={<MultiStepForm />} />
                    <Route path="/order/:orderId" element={<OrderDetails orderId={orderId} />} />
                    <Route path="/infoComponent" element={<InfoComponent />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
