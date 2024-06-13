import {
    AppBar,
    Box,
    Container,
    Input,
    Toolbar,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import  { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
function NavBar() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const handleTypographyClick = (path) => {
        navigate(path);
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            const formattedValue = JSON.stringify(e.target.value)
                .replaceAll(" ", "-")
                .replaceAll('"', "")
                .replace(/\--$/, "")
                .toLowerCase();

            navigate("/buscar/" + formattedValue);

            // Clear the input field
            setSearchValue("");
        }
    };

    return (
        <Box className={'navBar'}>
            <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar className="toolbar">
                        <Typography
                            variant="h4"
                            className="toolbar__logo"
                            onClick={() => handleTypographyClick("/")}
                        >
                            AniEmi
                        </Typography>
                        <Input
                            placeholder="Buscar"
                            className="toolbar__search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            id={'searchInput'}
                        />
                        <Typography
                            variant="h5"
                            className="toolbar__link"
                            onClick={() => handleTypographyClick("/")}
                        >
                            Inicio
                        </Typography>
                        <Typography
                            variant="h5"
                            className="toolbar__link"
                            onClick={() => handleTypographyClick("/animes")}
                        >
                            Animes
                        </Typography>
                        <div className="toolbar__link" onClick={() => handleTypographyClick("/profile")}>
                            <PersonIcon />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default NavBar;