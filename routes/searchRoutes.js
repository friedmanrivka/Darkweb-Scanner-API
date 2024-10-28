import express from 'express';
import { initiateSearch, getSearchResult } from '../controllers/searchController.js';
import { validateInitiateSearch, validateGetSearchResult, handleValidationErrors } from '../middleware/validationMiddleware.js';
const router = express.Router();


router.post('/', validateInitiateSearch, handleValidationErrors, initiateSearch);


router.get('/result', validateGetSearchResult, handleValidationErrors, getSearchResult);

export default router;