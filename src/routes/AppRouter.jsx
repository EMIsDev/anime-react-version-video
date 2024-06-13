import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Container} from "@mui/material";

import Error from "../components/Error";
import ProfilePage from "../pages/ProfilePage";
import InicioPage from "../pages/InicioPage";
import AnimesPage from "../pages/AnimesPage";
import AnimePage from "../pages/AnimePage";
import SearchPage from "../pages/SearchPage";
import NavBar from "../components/NavBar";
import React from "react";
import VideoPage from "../pages/VideoPage";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Container sx={{minHeight: '100vh'}}>
                <Routes>
                    <Route exact path='/' element={<InicioPage pageTitle={'Recomendations'}/>}/>
                    <Route path='/animes/' element={
                        <AnimesPage pageTitle={'Animes'}/>
                    }
                    />
                    <Route path='/anime/:animeName' element={<AnimePage/>}/>
                    <Route path='/buscar/:animeName' element={<SearchPage/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                    <Route path='/ver/:animeToWatch' element = {<VideoPage/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )


}


