import fs from 'fs';


let coordinates = fs.readFileSync('coords.json', 'utf8');

export const getCoordinates = (req, res) => {
    try {
        const data = JSON.parse(coordinates);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('not found');
    }
}

export const writeCoordinates = (req, res) => {
    try {
        const data = JSON.parse(coordinates);
        const stringified = JSON.stringify([...data, req.body]);
        fs.writeFileSync('coords.json', stringified);
        res.status(200).send('Coordinates added successfully');
    } catch (error) {
        res.status(400).send('Unable to add coordinates');
    }


}