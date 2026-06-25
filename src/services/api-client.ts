import axios, { type AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
    results: T[];
    count: number;
}

const apiClient = axios.create({
    baseURL: '/api',
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY,
    },
});

export const fetchData = <T> (endpoint: string, requestConfig?: AxiosRequestConfig): Promise<T[]>  => 
          apiClient
            .get<FetchResponse<T>>(endpoint, { ...requestConfig }) // <T> will be converted to T[] as in the FetchResponse interface
            .then((response) => response.data.results)
export default apiClient;