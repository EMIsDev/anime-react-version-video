import {Button, ButtonGroup, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {useAnimeApi} from "../hooks/useAnimeApi";
import {useState} from "react";
import LinearProgress from "@mui/material/LinearProgress";
import {useLocation, useNavigate, useParams} from "react-router-dom";

export default function VideoPage() {
    const [selectedVideo, setSelectedVideo] = useState("");
    const location = useLocation();
    const splitedUrl = location.pathname.split('/');
    const animeNameLink= splitedUrl[2].replace(/-cap-\d+/, "");
    const animeCap = splitedUrl[2] !== undefined ? splitedUrl[2].split('-').pop() : ' '; //obtener capitulo actual
    const navigate = useNavigate()
    const params = useParams();

    const {animeData: {videoLinks, totalChapters}, isLoading, error} = useAnimeApi();


    if (isLoading) {
        return (
            <Box>
                <LinearProgress/>
            </Box>
        );
    }

    if (error) {
        return <div>Error: </div>;
    }

    const handleVideoClick = (videoCode) => {
        setSelectedVideo(videoCode);
    };

    const handleNextChapter = () => {
        if (animeCap < totalChapters) {
            navigate(
                "/ver/" +
                params.animeToWatch.replace(
                    /\d+$/,
                    parseInt(params.animeToWatch.split("-").pop()) + 1
                ),
            )
        }
        setSelectedVideo('')
    };

    const handlePreviousChapter = () => {
        if (animeCap > 1) {
            navigate(
                "/ver/" +
                params.animeToWatch.replace(
                    /\d+$/,
                    parseInt(params.animeToWatch.split("-").pop()) - 1
                ),
            )
            setSelectedVideo('')
        }
    };

    return (
        <>
            <h1>Ver Capitulo {animeCap}:</h1>
            <div className={'serverButtonsContainer'}>
                <Box>
                    <Typography>
                        <ButtonGroup>
                            {videoLinks.map((video, index) => (
                                <Button
                                    id={video.code}
                                    key={index}
                                    onClick={() => handleVideoClick(video.code)}
                                    className={selectedVideo === video.code ? "selected" : ""}
                                >
                                    {video.serverName}
                                </Button>
                            ))}
                        </ButtonGroup>
                        <br></br>
                    </Typography>
                </Box>
            </div>
            <iframe
                className={'videoFrame'}
                id="reproductor"
                title="Rep"
                scrolling="no"
                width="100%"
                height="700px"
                src={selectedVideo}
                allow="accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
            ></iframe>

            <div className={'buttonNextPrevContainer'}>
                <Button variant="contained" onClick={handlePreviousChapter} disabled={animeCap <= 1}>
                    Anterior
                </Button>
                <Button variant="contained" onClick={() =>
                    navigate(
                        "/anime/" + animeNameLink
                    )
                }>
                    Capitulos
                </Button>
                <Button variant="contained" onClick={handleNextChapter} disabled={animeCap >= totalChapters}>
                    Siguiente
                </Button>
            </div>
        </>
    );
}
