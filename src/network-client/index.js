import axios from "axios";

const BASE_URL = "https://financeapp-be.vercel.app";

export const request = (method, endpoint, queryParams, requestBody) => {
    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzNzk5Nzg1LWI3NGItNGFhNC04ZjBmLTEwZTcxMjIxMzNlYyIsImVtYWlsIjoiaXZhbkBhZG1pbi5hZG1pbiIsIm5hbWUiOiJpdmFuIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY3NDYxNTQ2LCJleHAiOjE2Njc0NjUxNDZ9.Dqs1_f99ii7q5Bb1P_gfzChG11gykwM93QzaSeZkLts";

    const sentRequest = axios.request( 
        {
            method,
            url: endpoint,
            params: queryParams,
            data: requestBody,
            baseURL: BASE_URL,
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }
    ).catch(ex => {
        const resp = ex.response;
        if (resp.status === 401 || resp.status === 403) {
            // logout();
        }
    });

    return sentRequest;
}