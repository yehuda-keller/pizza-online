import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../image/background.png';

function Home() {
    const wrapperStyle = {
        position: 'fixed', // Make the background cover the entire page
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        zIndex: -1 // Ensure the background stays behind other elements
    };

    const contentStyle = {
        zIndex: 1, // Ensure content stays above the background
        textAlign: 'center'
    };

    const navigate = useNavigate();

    const handleStartOrder = () => {
        navigate('/form');
    };

    return (
        <div style={wrapperStyle}>
            <div style={contentStyle}>
                <h1>Welcome to Pizza Online!</h1>
                <p>Your favorite pizza delivered hot and fresh.</p>
                <button className="btn btn-primary mt-3" onClick={handleStartOrder}>
                    Start New Order
                </button>
            </div>
        </div>
    );
}

export default Home;
