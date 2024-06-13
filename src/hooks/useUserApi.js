import { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";

export const useUserApi = () => {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const splitedUrl = location.pathname.split('/');
    const filters = Object.fromEntries(searchParams.entries());
    const queryParams = new URLSearchParams(filters);
    const params = new URLSearchParams();
    params.append('userId', process.env.REACT_APP_USER_ID);

    let baseApi = process.env.REACT_APP_API_URL_BASE + `/${splitedUrl[1]}/`;
    queryParams.set('userId', process.env.REACT_APP_USER_ID);

    useEffect(() => {

        const fetchRequest = async () => {
            try {
                setIsLoading(true);
                let response = await fetch(
                    `${baseApi}?${queryParams.toString()}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }

                let data = await response.json();
                setUserData(data);

            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRequest();

    }, [location]);

    return { userData, isLoading, error };
};

