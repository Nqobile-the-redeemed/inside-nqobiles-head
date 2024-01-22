import { Link } from "react-router-dom"
import React, { UseState, useState } from "react"
import '../App.css';

export default function ContactButton ({ getColorSwatch }) {

    const [isActive, setIsActive] = useState(false);
    const [wasRecentlyActive, setWasRecentlyActive] = useState(false)
    
    const colorPair = getColorSwatch();

    function findOutWhatIsHappening() {
        console.log(colorPair)
    }

    let activeStyle = {

        backgroundColor: colorPair['backgroundColor'],
        color: colorPair['textColor'],
        borderColor: colorPair['textColor'],
        borderStyle: 'solid',
        borderWidth: '0.5px',
        borderRadius: '0%',
        outline: 'none',
        // transition: 'background-color, color, borderColor',
    }

    const defaultStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
        color: '#F9F8F8',
        borderColor: '#000000',
        borderStyle: 'solid',
        borderWidth: '0.5px',
        borderRadius: '0%',
        outline: 'none',
        // transition: 'background-color, color, borderColor',
    }

    const handleMouseDown = () => {
        setIsActive(true);
        setWasRecentlyActive(true)
    }
    
    const handleMouseUp = () => {
        setIsActive(false);
        setTimeout(() => setWasRecentlyActive(false), 2000);
    }

    const style = isActive || wasRecentlyActive ? activeStyle : defaultStyle;

    return (
        <Link to="/contact" style={{ outline: 'none' }}>
            <button className="contactButton"  onClick={findOutWhatIsHappening} to="/contact" 
            style={style}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            >
                Contact
            </button>
        </Link>
    )

}
