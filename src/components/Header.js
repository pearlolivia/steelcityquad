import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/SteelCityQuadLogo.jpeg';

const linkStyle = {
    textDecoration: "none",
    padding: '10px',
    fontFamily: "SpicyRiceReg",
    fontSize: "30px",
    color: "black"
}

export const Header = () => {
    return (
        <div style={{margin: "auto", width: "50%", paddingBottom: "10px"}}>
            <div style={{margin: "auto", textAlign:"center"}}>
                <img src={logo} style={{width: '250px', height: '250px'}}/>
            </div>
            <div style={{margin: "auto", width: "70%", textAlign: "center"}}>
                <Link to="" style={linkStyle}>About</Link>
                <Link to="/calendar" style={linkStyle}> Calendar</Link>
                <Link to="/donate" style={linkStyle}>Donations</Link>
            </div>
        </div>
    )
}
