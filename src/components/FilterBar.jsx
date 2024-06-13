import React, {useEffect, useState} from "react";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

function FilterBar() {
    const [data, setData] = useState(null);

    const loadFilters = async () => {
        const fetchString = process.env.REACT_APP_API_URL_BASE + '/filters';

        try {
            const response = await fetch(fetchString, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        loadFilters();
    }, []);

    const [filters, setFilters] = useState({
        categoria: '',
        anio: '',
    });

    const handleFilterChange = (event) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSearch = () => {
        const {categorias, anio} = filters;

        console.log('Selected categorias:', categorias);
        console.log('Selected Año:', anio);
    };

    return (
        <div className='centeredContent'>
            <div className={'topSeparator filterBar'}>
                {data?.categorias && data?.years ? (
                    <>
                        <FormControl variant="filled">
                            <InputLabel >Categorías</InputLabel>
                            <Select
                                label="Categorías"
                                name="categorias"
                                id={filters.categorias}
                                value={filters.categorias}
                                onChange={handleFilterChange}
                                defaultValue={''}
                            >
                                {data.categorias.map((categoria) => (
                                    <MenuItem key={categoria} value={categoria}>
                                        {categoria}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl variant="filled" >
                            <InputLabel >Año</InputLabel>
                            <Select
                                label="Año"
                                name="anio"
                                id={filters.anio}
                                value={filters.anio}
                                onChange={handleFilterChange}
                                defaultValue={''}
                            >
                                <MenuItem value="">Todos</MenuItem>
                                {data.years.map((year) => (
                                    <MenuItem key={year} value={year}>
                                        {year}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button variant="contained" onClick={handleSearch}>
                            Buscar
                        </Button>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default FilterBar;
