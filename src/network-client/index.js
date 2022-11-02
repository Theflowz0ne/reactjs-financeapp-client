import axios from "axios";

const BASE_URL = "https://financeapp-be.vercel.app";

export const request = (method, endpoint, queryParams, requestBody) => {
    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzNzk5Nzg1LWI3NGItNGFhNC04ZjBmLTEwZTcxMjIxMzNlYyIsImVtYWlsIjoiaXZhbkBhZG1pbi5hZG1pbiIsIm5hbWUiOiJpdmFuIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY3NDIyMjY4LCJleHAiOjE2Njc0MjU4Njh9.s3WVA81Krw7buTDO6_8TGQiH-9kwTfHrDhMbbwcJRt0";

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