import { Link } from "react-router-dom";

export default function ServiceCard ({data, onHoverImage, setOnHoverImage, videoStyle, setVideoStyle, onHoverVideo, setOnHoverVideo, style, className, tags, title, description, summary, coverImage, refHold}) {

    let servicePreveiw = function(){
        if(!data.videoHighlight){
            setOnHoverImage(data.imageHighlight)
        }else{
            setOnHoverVideo(data.videoHighlight)
            setVideoStyle({
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            })
        }
    }

    let servicePreveiwOff = function(){
        setOnHoverImage('https://source.unsplash.com/high-rise-buildings-iSZJxklblkw')
        setOnHoverVideo('')
        setVideoStyle({
            display: 'block'
        })
    }

    return (
        <div className="serviceCard" onMouseOver={servicePreveiw} onMouseOut={servicePreveiwOff}> 
            <svg className='serviceIcon' viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='iconPath' d={data.iconD} fill={data.iconFill}/>
            </svg>
            <div className='serviceText'>
                <h3 className="serviceTitle whiteBackgroundH4">{data.title}</h3>
                <p className="whiteBackgroundBody">{data.description}</p>
                <button id="wbb" className="whiteBackgroundButton">
                    <Link className="buttonLink" to={data.pageLink}>Learn More</Link>
                </button>
            </div>
        </div>
    )
}

