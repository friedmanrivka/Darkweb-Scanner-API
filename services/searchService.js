import { intelXSearch, intelXFetchResult } from '../repositories/intelxRepository.js';


export async function searchDomain(domain) {
    return await intelXSearch(domain);
}


export async function fetchSearchResult(id) {
    return await intelXFetchResult(id);
}
