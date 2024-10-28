import axios from 'axios';


export async function intelXSearch(domain) {
    const url = `${process.env.INTELX_BASE_URL}intelligent/search`;
    const response = await axios.post(url, {
        term: domain,
        buckets: [],
        lookuplevel: 0,
        maxresults: 10,
        timeout: 0,
        datefrom: "",
        dateto: "",
        sort: 2,
        media: 0,
        terminate: []
    }, {
        headers: { 
            'x-key': process.env.INTELX_API_KEY,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}


export async function intelXFetchResult(id) {
    const url = `${process.env.INTELX_BASE_URL}intelligent/search/result?id=${id}`;
    const response = await axios.get(url, {
        headers: {
            'x-key': process.env.INTELX_API_KEY
        }
    });
    return response.data;
}
