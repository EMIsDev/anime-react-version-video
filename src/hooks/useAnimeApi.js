import {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";

export const useAnimeApi = () => {
    const [animeData, setAnimeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const splitedUrl = location.pathname.split('/');
    const searchParams = new URLSearchParams(location.search);
    const filters = Object.fromEntries(searchParams.entries());
    let baseApi = process.env.REACT_APP_API_URL_BASE + `/${splitedUrl[1]}`;
    const queryParams = new URLSearchParams(filters);
    const animeName = splitedUrl[2] !== undefined ? splitedUrl[2] : ' ';
    if (animeName !== ' ') {
        baseApi += '/' + animeName;
    }

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                setIsLoading(true);
                let response = await fetch(`${baseApi}?${queryParams.toString()}`,
                );

                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }

                let data = await response.json();
                setAnimeData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRequest();

    }, [location]);

    return {animeData, isLoading, error};
};

