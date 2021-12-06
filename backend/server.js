import express from 'express';
import cors from 'cors';
import router from './router.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.end('connected successfully!'));

app.use('/sonar', router);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running in port ${port}`))