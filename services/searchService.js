import { intelXSearch, intelXFetchResult } from '../repositories/intelxRepository.js';

// מבצע חיפוש ב-IntelX לפי דומיין
export async function searchDomain(domain) {
    return await intelXSearch(domain);
}

// מחזיר תוצאה מלאה לפי ID
export async function fetchSearchResult(id) {
    return await intelXFetchResult(id);
}
