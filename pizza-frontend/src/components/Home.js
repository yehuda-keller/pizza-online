import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../image/backgrond2.png';

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
        color: 'green',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        zIndex: -1 // Ensure the background stays behind other elements
    };

    const contentStyle = {
        zIndex: 1, // Ensure content stays above the background
        textAlign: 'center'
    };

    const infoStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: '20px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
    };

    const columnStyle = {
        flex: 1,
        padding: '0 20px'
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
                <button className="btn outline-success" onClick={handleStartOrder}>
                    START NEW ORDER
                </button>
                <div style={infoStyle}>
                    <div style={columnStyle}>
                        <h2>Jerusalem Authentic Pizzeria</h2>
                        <p>See similar venues: <a href="#">Pizza</a>, <a href="#">Italian</a>, <a href="#">Vegan</a>, <a href="#">Salad</a></p>
                    </div>
                    <div style={columnStyle}>
                        <h3>Address</h3>
                        <p>9226214 Jerusalem</p>
                        <p><a href="https://www.google.com/maps/@31.4062525,35.0818155,7z?entry=ttu">See map</a></p>
                    </div>
                    <div style={columnStyle}>
                        <h3>Delivery times</h3>
                        <p>Monday: 11:30 - 23:30</p>
                        <p>Tuesday: 11:30 - 17:00</p>
                        <p>Wednesday: 21:00 - 24:00</p>
                        <p>Thursday: 11:30 - 23:30</p>
                        <p>Friday: Closed</p>
                        <p>Saturday: 20:45 - 24:00</p>
                        <p>Sunday: 11:30 - 23:30</p>
                    </div>
                    <div style={columnStyle}>
                        <h3>More information</h3>
                        <p><a href="tel:+97259595959">+972 595 959593</a></p>
                        <p><a href="http://localhost:3000/#">Visit website</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
