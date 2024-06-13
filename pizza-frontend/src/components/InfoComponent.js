import React from 'react';
import './InfoComponent.css';

const InfoComponent = () => {
    return (
        <div className="info-container">
            <div className="info-column">
                <h2>Jerusalem Authentic Pizzeria</h2>
                <p>See similar venues: <a href="#">Pizza</a>, <a href="#">Italian</a>, <a href="#">Vegan</a>, <a href="#">Salad</a></p>
            </div>
            <div className="info-column">
                <h3>Address</h3>
                <p>9226214 Jerusalem</p>
                <p><a href="https://www.google.com/maps/@31.4062525,35.0818155,7z?entry=ttu">See map</a></p>
            </div>
            <div className="info-column">
                <h3>Delivery times</h3>
                <p>Monday: 11:30 - 23:30</p>
                <p>Tuesday: 11:30 - 17:00</p>
                <p>Wednesday: 21:00 - 24:00</p>
                <p>Thursday: 11:30 - 23:30</p>
                <p>Friday: Closed</p>
                <p>Saturday: 20:45 - 24:00</p>
                <p>Sunday: 11:30 - 23:30</p>
            </div>
            <div className="info-column">
                <h3>More information</h3>
                <p><a href="tel:+97259595959">+972 595 959593</a></p>
                <p><a href="http://localhost:3000/#">Visit website</a></p>
            </div>
        </div>
    );
};

export default InfoComponent;
