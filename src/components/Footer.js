import React from 'react';

let date = new Date();
const year = date.getFullYear();

const iconStyle = {
    padding: "15px",
    color: "black"
}
export const Footer = () => {
    return (
        <div style={{margin: "auto", width: "50%", paddingBottom: "10px", paddingTop: "20px"}}>
            <div style={{margin: "auto", width: "70%", textAlign: "center"}}>
                <a href="https://facebook.com/groups/558001618221625" style={iconStyle}><i className="fab fa-facebook-square fa-3x"></i></a>
                <a href="https://www.instagram.com/steelcityquad/" style={iconStyle}><i className="fab fa-instagram fa-3x"></i></a>
                <a href="https://paypal.me/steelcityquad" style={iconStyle}><i className="fab fa-paypal fa-3x"></i></a>
            </div>
            <p style={{margin: "auto", width: "38%", paddingTop: "10px"}}>Created with React.js <i className="fab fa-react fa-2x"></i> {year}</p>
        </div>
    )
}
