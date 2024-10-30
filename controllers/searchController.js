import { searchDomain, fetchSearchResult } from '../services/searchService.js';


export async function initiateSearch(req, res) {
    const { domain } = req.body;


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

export async function getSearchResult(req, res) {
    const { id } = req.query;


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
