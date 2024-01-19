import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import N from '../assets/logo variants/N.svg';
import N_1 from '../assets/logo variants/N_1.svg';
import N_2 from '../assets/logo variants/N_2.svg';
import N_3 from '../assets/logo variants/N_3.svg';
import N_4 from '../assets/logo variants/N_4.svg';


export default function NavBar() {
    return (
        <div className="nav-bar">
        <div className="nav-bar__logo">
            <Link to="/">
                <svg className='currentLogo' width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.3048 22.2468C0.3048 10.5828 9.8304 0.959992 21.4944 0.959992C33.2556 0.959992 42.7812 10.5828 42.7812 22.2468V43.4364C42.7812 46.4496 42.0036 51.99 47.058 51.99C49.3908 51.99 51.3348 50.1432 51.3348 47.8104V0.959992H68.3448V47.8104C68.3448 59.4744 58.722 69 47.058 69C35.2968 69 25.7712 59.4744 25.7712 47.8104V22.2468C25.7712 16.7064 17.3148 16.7064 17.3148 22.2468V69H0.3048V22.2468Z" fill="white"/>
                </svg>
            </Link>
        </div>
        <div className="nav-bar__links">
            <Link className='headerButton' to="/portfolio">Portfolio</Link>
            <Link className='headerButton' to="/resume">Resume</Link>
            <Link className='headerButton' to="/about">About</Link>
            <Link className='headerButton' to="/posts">Posts</Link>
            <Link className='headerButton' to="/services">Services</Link>
            <Link className='headerButton contactButton' to="/contact">Contact</Link>
        </div>
        </div>
    );
    }