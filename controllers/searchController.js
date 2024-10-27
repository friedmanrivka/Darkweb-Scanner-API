import { searchDomain, fetchSearchResult } from '../services/searchService.js';

// פונקציה לניהול נקודת הקצה לביצוע חיפוש
export async function initiateSearch(req, res) {
    const { domain } = req.body;

    // if (!domain) {
    //     return res.status(400).json({ error: 'Domain is required in the request body' });
    // }

    try {
        const result = await searchDomain(domain);
        res.json({
            message: 'Search initiated',
            id: result.id
        });
    } catch (error) {
        res.status(500).json({ error: 'Error during search' });
    }
}

// פונקציה לניהול נקודת הקצה לקבלת תוצאה לפי ID
export async function getSearchResult(req, res) {
    const { id } = req.query;

    // if (!id) {
    //     return res.status(400).json({ error: 'ID is required as a query parameter' });
    // }

    try {
        const result = await fetchSearchResult(id);
        res.json({
            message: 'Full result retrieved',
            data: result
        });
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving result' });
    }
}
