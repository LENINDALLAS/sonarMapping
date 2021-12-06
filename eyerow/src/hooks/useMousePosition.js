import { useState, useEffect } from 'react';
import axios from 'axios';


export const useMousePosition = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', updatePosition);
        return () => {
            window.removeEventListener('mousemove', updatePosition);
        }
    }, [])

    return position
}

export const getSonarData = async () => {
    try {
        const { data } = await axios.get('http://localhost:3001/sonar');
        return data
    } catch (error) {
        alert('Error getting sonar mapping');
    }
};