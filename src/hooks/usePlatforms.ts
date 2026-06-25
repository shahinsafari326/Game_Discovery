import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';


const apiClient = new APIClient ("/platforms/lists/parents");


export interface Platform {
    id: number;
    name: string;
    slug: string; 
}


const usePlatforms = () => {
    return useQuery<Platform[], Error>({
        queryKey: ["Platform"],
        queryFn: apiClient.getAll,
        staleTime: 5000,

    })
}


export default usePlatforms;