import React, {Component} from 'react';
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyBCh4gf3_ib_b9sguGB6UjO-Tix52TGmnc";
let calendars = [
    {calendarId: "squaddesses@gmail.com",
        color: "#A592C9"}
];


export default class CalendarPage extends Component {
    render() {
        return (
            <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
                <Calendar apiKey={API_KEY} calendars={calendars}/>
                {/*<iframe src={"https://calendar.google.com/calendar/embed?src=squaddesses%40gmail.com&ctz=Europe%2FLondon"}*/}
                {/*        style={{border: 0, width: "100%", height: "75%", frameBorder: "0", scrolling: "no"}}></iframe>*/}
            </div>
        )
    }
}
