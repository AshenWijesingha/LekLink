import express from 'express';

import { getSpectacles, getSpectacle, createSpectacle, updateSpectacle, deleteSpectacle, uploadImage, deleteImage } from '../controllers/spectacles.js';

const router = express.Router();

router.post('/image', uploadImage);
router.delete('/image/:id', deleteImage);
router.get('/', getSpectacles);
router.post('/', createSpectacle);
router.get('/:id', getSpectacle);
router.patch('/:id', updateSpectacle);
router.delete('/:id', deleteSpectacle);


export default router;