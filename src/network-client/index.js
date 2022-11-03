import axios from "axios";
import { getJwtTokenCookie, logout } from "../utils/utils";

const BASE_URL = "https://financeapp-be.vercel.app";

export const request = (method, endpoint, queryParams, requestBody) => {
    const jwtToken = getJwtTokenCookie();

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
            logout();
        }
    });

    return sentRequest;
}