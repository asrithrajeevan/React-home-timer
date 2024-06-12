import React, { useState, useEffect } from 'react';
import Navbar from './NavBar'
import './style.css'

export const Home = () => {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const [countDown, setCountDown] = useState(new Date('July 29, 2024 00:00:00').getTime());
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
        let now = new Date().getTime(),
            distance = countDown - now;

        setTimeRemaining({
            days: Math.floor(distance / (day)),
            hours: Math.floor((distance % (day)) / (hour)),
            minutes: Math.floor((distance % (hour)) / (minute)),
            seconds: Math.floor((distance % (minute)) / second)
        });

        if (distance < 0) {
            clearInterval(interval);
            setTimeRemaining({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
            });
        }
        }, second);

        return () => clearInterval(interval);
    }, [countDown]);

    return (
        <div>
            <Navbar />
            <div className="counter">
                <div>
                    <h1 id="head">Days Remaining</h1>
                </div>
                <div>
                    <h3>for 29 July 2024</h3>
                </div>
                <div>
                    <ul>
                        <li><span id="days">{timeRemaining.days}</span>days</li>
                        <li><span id="hours">{timeRemaining.hours}</span>Hours</li>
                        <li><span id="minutes">{timeRemaining.minutes}</span>Minutes</li>
                        <li><span id="seconds">{timeRemaining.seconds}</span>Seconds</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
