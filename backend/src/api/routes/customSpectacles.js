import express from 'express';

import { getCusSpectacles, getCusSpectacle, createCusSpectacle, updateCusSpectacle, deleteCusSpectacle, uploadImage, deleteImage } from '../controllers/customSpectacles';

const router = express.Router();

router.post('/image', uploadImage);
router.delete('/image/:id', deleteImage);
router.get('/', getCusSpectacles);
router.post('/', createCusSpectacle);
router.get('/:id', getCusSpectacle);
router.patch('/:id', updateCusSpectacle);
router.delete('/:id', deleteCusSpectacle);

export default router;