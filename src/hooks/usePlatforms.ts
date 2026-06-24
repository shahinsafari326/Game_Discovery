import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { type FetchResponse } from './useData';
export interface Platform {
    id: number;
    name: string;
    slug: string; 
}

const fetchPlatforms = (): Promise<Platform[]> =>
     apiClient
      .get<FetchResponse<Platform>>("/platforms/lists/parents") // <Platform> will be converted to Platform[] in the FetchResponse interface
      .then((response) => response.data.results); 

const usePlatforms = () => {
    return useQuery<Platform[], Error>({
        queryKey: ["Platform"],
        queryFn:fetchPlatforms,
        staleTime: 5000,

    })
}


export default usePlatforms;