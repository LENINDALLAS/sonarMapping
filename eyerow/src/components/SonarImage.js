import React, { useState, useEffect } from 'react';
import sonar from '../images/sonar_map.png';
import { useMousePosition, getSonarData } from '../hooks/useMousePosition';

function SonarImage({ sonarData, setSonarData }) {
    const [mark, setMark] = useState('');
    // const [sonarData, setSonarData] = useState([]);
    const [title, setTitle] = useState('');

    const position = useMousePosition();

    const callSonarData = async () => {
        const data = await getSonarData();
        setSonarData(data);
    }

    useEffect(() => {
        callSonarData()
    }, [])

    return (
        <div>
            <h3><u>EyeRov Dashboard</u></h3>
            <img src={sonar} alt="sonar_map" useMap="#sonar" height="auto" max-width="100%" className="map" />
            <map name="sonar" >
                {sonarData.map((item, idx) => (
                    <area shape={item.shape} coords={item.coords} alt="sonar_map" key={idx}
                        onMouseOver={() => { setMark('mark'); setTitle(item.title) }} onMouseOut={() => setMark('')} />
                )
                )}
            </map>
            {mark && <span className={mark} style={{ left: position.x, top: position.y }}>{title}</span>}
            {mark && <span className='pointer' style={{ left: position.x + 12, top: position.y - 80 }}>.</span>}
        </div>
    )
};

export default SonarImage;