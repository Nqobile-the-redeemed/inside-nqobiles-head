export default function SkillTag ({data}) {


    return (
        <div className="skill-tag">
            {/* <svg className='serviceIcon' viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='iconPath' d={data.icon} fill='black'/>
            </svg> */}
            <p>{data.skill}</p>
        </div>
    )
}
