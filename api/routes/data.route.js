import { Router } from 'express';
import { getCountries, getCities, getLanguages, getPointsOfInterest } from '../controllers/data.controller.js';
const router = Router();

router.get('/countries', getCountries);
router.get('/cities', getCities);
router.get('/languages', getLanguages);
router.get('/points-of-interest', getPointsOfInterest);


export default router;