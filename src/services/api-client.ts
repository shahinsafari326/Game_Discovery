import axios, { type AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
    results: T[];
    next: string | null;
    count: number;
}

const axiosInstance = axios.create({
    baseURL: '/api',
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY,
    },
});

class APIClient{
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint=endpoint;
    }

    getAll = <T> (requestConfig?: AxiosRequestConfig):  Promise<FetchResponse<T>>   => 
          axiosInstance
            .get<FetchResponse<T>>(this.endpoint, { ...requestConfig }) // <T> will be converted to T[] as in the FetchResponse interface
            .then((response) => response.data)
}

export default APIClient;