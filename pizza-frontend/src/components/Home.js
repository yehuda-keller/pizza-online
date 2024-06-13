import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../image/backgrond2.png';
import InfoComponent from './InfoComponent';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleStartOrder = () => {
        navigate('/form');
    };

    return (
        <div
            className="wrapper"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="content">
                <h1>Welcome to Pizza Online!</h1>
                <p>Your favorite pizza delivered hot and fresh.</p>
                <button className="btn outline-success" onClick={handleStartOrder}>
                    START NEW ORDER
                </button>
                <InfoComponent />
            </div>
        </div>
    );
}

export default Home;
