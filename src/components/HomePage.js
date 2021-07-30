import React, {Component} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RollOutJune21 from '../images/RollOutJune21.jpeg';
import RollOutJune212 from '../images/RollOutJune212.jpeg';
import Skatenic1 from '../images/Skatenic1.jpeg';
import Skatenic21 from '../images/Skatenic21.jpeg';
import Skatenic22 from '../images/Skatenic22.jpeg';
import Skatenic23 from '../images/Skatenic23.jpeg';
import Skatenic24 from '../images/Skatenic24.jpeg';
import Skatenic25 from '../images/Skatenic25.jpeg';
import Skatenic26 from '../images/Skatenic26.jpeg';
import Banner from '../images/Banner.jpeg';

const imgStyle = {
    width: "50%",
    marginLeft: "25%",
    // padding: "10px",
    height: "300px"
}

const textStyle = {
    textAlign: "center"
}

const properties = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    indicators: true,
    slidesToShow: 1,
    className: "each-slide"
}

const photos = [
    //Skatenic1,
    RollOutJune21,
    RollOutJune212,
    Skatenic21,
    Skatenic22,
    Skatenic23,
    Skatenic24,
    //Skatenic25,
    //Skatenic26
]

const vertiPhotos = [
    Skatenic26,
    Skatenic25
]

export default class HomePage extends Component {
    render() {
        return (
            <div>
            <div style={{backgroundColor: "#A592C9", paddingBottom: "20px",paddingTop: "20px"}}>
                {/*<img src={Skatenic1} style={imgStyle}/>*/}
                <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
                    <h3 style={textStyle}>Hey everyone! We're Steel City Quad, a skating group based in Sheffield.</h3>
                    <p style={textStyle}>Although the group name implies quad skaters only, <b>inlines and skateboards are also welcome!</b> If you are a complete beginner, have all the experience in the world, or just want to make new friends,
                    please come and join us on one of our events.</p>
                    <p style={textStyle}>We are at the Roller Disco EVERY Friday at Skate Central <b>and</b> at the Girls/NB Only Night at House Skatepark.
                    Please check our calendar for other events!</p>
                </div>
                <img src={Banner} style={imgStyle}/>
            </div>
            <div style={{paddingLeft: "17%", paddingBottom: "40px", paddingTop: "40px"}}>
                <Slider {...properties}>
                    {photos.map((photo) => {
                        return (
                            <div>
                                <img src={photo} style={{width: "75%", height: "500px", boxShadow: "5px 10px #888888"}}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
                <div style={{backgroundColor: "#A592C9"}}>
                <div style={{paddingLeft: "12%", paddingBottom: "40px", paddingTop: "40px", margin: "auto", width: "35%"}}>
                    <Slider {...properties}>
                        {vertiPhotos.map((photo) => {
                            return (
                                <div>
                                    <img src={photo} style={{width: "85%", height: "600px", boxShadow: "5px 10px #888888"}}/>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                </div>
            </div>
        )
    }
}
