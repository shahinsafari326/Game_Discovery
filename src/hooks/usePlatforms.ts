import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../services/api-client';
export interface Platform {
    id: number;
    name: string;
    slug: string; 
}


const usePlatforms = () => {
    return useQuery<Platform[], Error>({
        queryKey: ["Platform"],
        queryFn:() => fetchData("/platforms/lists/parents"),
        staleTime: 5000,

    })
}


export default usePlatforms;