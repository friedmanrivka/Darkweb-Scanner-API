import express from 'express';
import { initiateSearch, getSearchResult } from '../controllers/searchController.js';
import { validateInitiateSearch, validateGetSearchResult, handleValidationErrors } from '../middleware/validationMiddleware.js';
const router = express.Router();

// Apply validation middleware for initiateSearch
router.post('/', validateInitiateSearch, handleValidationErrors, initiateSearch);

// Apply validation middleware for getSearchResult
router.get('/result', validateGetSearchResult, handleValidationErrors, getSearchResult);

export default router;