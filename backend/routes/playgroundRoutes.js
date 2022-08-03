import express from 'express';
import { testFunction } from '../controllers/playgroundController.js';

const router = express.Router();

router.get('/testFunction', testFunction);

export default router;
