import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import StarIcon from '@mui/icons-material/Star';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {Chip, Container, Grid, Typography} from "@mui/material";
import EpisodeList from "./EpisodeList";
import BuyButton from "./BuyButton";


export default function AnimeInfo({animeData, isLoading, error}) {

    if (isLoading) {
        return <Box>
            <LinearProgress/>
        </Box>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Container>
            <Grid className={'topSeparator animeInfo'} container spacing={3}>
                <Grid item>
                    <img src={animeData.animeImg} alt={animeData.animeName}/>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={4}>
                        <Grid item xs>
                            <Typography component="div">
                                <h1> {animeData.animeName.replaceAll('-', ' ').toUpperCase()} </h1>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {animeData.animeTags.map((keywords, index) => (
                                    <Chip label={keywords} color="success" key={index}/>
                                ))}
                            </Typography>
                            <div className="centered-container">
                                <StarIcon/>
                                <span>{animeData.animeRating}</span>
                            </div>
                            <div className="centered-container">
                                <CalendarTodayIcon/>
                                <span>{new Date(animeData.animeDate).toLocaleDateString('es-ES')}</span>
                            </div>
                            <br/>
                            <Typography variant="body2" className={'animeDetailsText'}>
                                {animeData.animeDetails}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <BuyButton animeName={animeData.animeName.replaceAll('-', ' ')} animeId={animeData._id}
                                   animeImg={animeData.animeImg}/>
                    </Grid>
                </Grid>

            </Grid>

            <EpisodeList animeName={animeData.animeName} animeChapters={animeData.chapters}/>
        </Container>
    );
}
