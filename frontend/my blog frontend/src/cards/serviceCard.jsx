import { Link } from "react-router-dom";

export default function ServiceCard (data) {

    return (
        <div className="serviceCard">
            <svg className='serviceIcon' width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={data.iconD} fill={data.iconFill}/>
            </svg>
            <div className='serviceText'>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <button className="whiteBackgroundButton">
                    <Link to={data.pageLink}>Learn More</Link>
                </button>
            </div>
        </div>
    )
}

imageHighlight: 'https://source.unsplash.com/space-gray-iphone-x-on-stand-near-silver-imac-and-apple-magic-keyboard-L0nipfx-Ry4',
videoHighlight: 'https://www.youtube.com/watch?v=HT4J5ZNf1TE',
