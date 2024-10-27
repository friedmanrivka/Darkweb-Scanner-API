// middlewares/validationMiddleware.js
import { check, validationResult, query, body } from 'express-validator';

// Validation for the initiateSearch function remains the same
export const validateInitiateSearch = [
    body('domain')
        .exists({ checkFalsy: true })
        .withMessage('Domain is required in the request body')
        .isString()
        .withMessage('Domain must be a string')
        .trim()
        .matches(/^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/)
        .withMessage('Domain must be a valid domain format (e.g., example.com)'),
];

// Updated Validation for the getSearchResult function to support UUIDs
export const validateGetSearchResult = [
    query('id')
        .exists({ checkFalsy: true })
        .withMessage('ID is required as a query parameter')
        .isString()
        .withMessage('ID must be a string')
        .custom((value) => {
            // Allow either a 24-character hex string or a UUID
            const isValidHex = /^[a-fA-F0-9]{24}$/.test(value);
            const isValidUUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(value);
            return isValidHex || isValidUUID;
        })
        .withMessage('ID must be either a valid 24-character hex string or a 36-character UUID'),
];

// Middleware to handle validation errors remains the same
export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array().map(error => ({
                field: error.param,
                message: error.msg
            }))
        });
    }
    next();
};
