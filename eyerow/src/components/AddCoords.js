import React, { useState, useEffect } from 'react';
import { getSonarData } from '../hooks/useMousePosition';
import axios from 'axios';


function AddCoords({ setSonarData }) {

    const [title, setTitle] = useState('');
    const [coords, setCoords] = useState('');
    const [shape, setShape] = useState('');
    const [formData, setFormData] = useState({});

    const addCoordinates = (e) => {
        e.preventDefault();
        setFormData({
            title,
            coords,
            shape
        });
        setTitle('');
        setCoords('');
        setShape('');
    }

    const sendCoordinates = async (formData) => {
        try {
            await axios.post('http://localhost:3001/sonar', formData);
            const data = await getSonarData();
            console.log(data, 'sad');
            setSonarData(data)
            window.location.reload();
            alert('Coordinates added successfully');
        } catch (error) {
            alert('Form submission unsuccessful try again');
        }
    }

    useEffect(() => {
        if (Object.keys(formData).length !== 0) {
            if (formData.title && formData.coords && formData.shape) {
                sendCoordinates(formData)
            } else {
                alert('Please enter all fields')
            }
        }
        // eslint.disable
    }, [formData])
    return (
        <div>
            <hr />
            <h3><u>Add Coordinates</u></h3>
            <form onSubmit={(e) => addCoordinates(e)}>
                <div className="row1">
                    <label htmlFor="title"> Title
                        <input type="text" name="title" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                    <label htmlFor="coordinates"> Coordinates
                        <input type="text" name="coordinates" placeholder="Enter coordinates" value={coords} onChange={(e) => setCoords(e.target.value)} />
                    </label>
                </div>
                <div className="row2">
                    <label htmlFor="shape"> shape
                        <input type="text" name="shape" placeholder="Enter shape" value={shape} onChange={(e) => setShape(e.target.value)} />
                    </label>
                    <input type="submit" value="ADD" />
                </div>
            </form>
        </div>
    )
}

export default AddCoords;