import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../image/background.png';

function Home() {
    const wrapperStyle = {
        width: "100%",
        height: "100vh", // Make it cover the entire viewport height
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
    };

    const navigate = useNavigate();

    const handleStartOrder = () => {
        navigate('/form');
    };

    return (
        <div style={wrapperStyle}>
            <div className="text-center">
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