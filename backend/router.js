import express from 'express';
import { getCoordinates, writeCoordinates } from './controllers.js';
const router = express.Router();

router.route('/').get(getCoordinates).post(writeCoordinates);

export default router;