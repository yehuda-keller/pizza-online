import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import MultiStepForm from './components/MultiStepForm';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Container className="mt-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/form" element={<MultiStepForm />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
