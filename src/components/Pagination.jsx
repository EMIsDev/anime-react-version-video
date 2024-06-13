import {Pagination} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import * as React from 'react';


function AnimePagination({maxPages}) {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(new URLSearchParams(location.search).get("page")) || 1;
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        goToPage(value)
    };
    const goToPage = (newPage) => {
        // Set the new page number in the query parameter
        searchParams.set("page", newPage);

        const newPath = `${location.pathname}?${searchParams.toString()}`;
        window.scrollTo({ top: 0, behavior: "smooth" });

        navigate(newPath);
    };

    return (

        <Pagination  className={'pagination'} color='primary' size="large" variant="outlined" shape="rounded" count={maxPages} page={page} onChange={handleChange}></Pagination>


    );

}

export default AnimePagination;