import React, {useEffect, useState} from 'react';

export default function CategoryTab ({data, getColorSwatch}) {

    const [style, setStyle] = useState({});

    useEffect(() => {
        let colorHolder = getColorSwatch();

        console.log(colorHolder);

        setStyle({
            backgroundColor: colorHolder['backgroundColor'],
            color: colorHolder['textColor'],
            borderColor: colorHolder['textColor'],
            borderStyle: 'solid',
            borderWidth: '0.5px',
        });

    }, []); // Empty array means this useEffect will run once on component mount


    return (
        <div className="categoryTab" style={style}>
            {/* <svg className='serviceIcon' viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='iconPath' d={data.icon} fill='black'/>
            </svg> */}
            <p className="categoryTabTitle">{data.subject}</p>
        </div>
    )
}

