import { Grid} from "@mui/material";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import AnimeCard from "./AnimeCard";


function CardContainer({pageTitle,animeData,isLoading,error}) {



    if (isLoading) {
        return  <Box>
            <LinearProgress />
        </Box>;
    }

    if (error) {
        return <div>Error: </div>;
    }

    return <>
        <h1>{pageTitle}</h1>
            <Grid container className={'cardContainer'} >
                {animeData.map((animeData,index) =>
                    <Grid item className={'animeCardGrid'}  id={animeData._id} key={index}>
                        <AnimeCard animes = {animeData} />
                    </Grid>)}
            </Grid>
    </>;
}
export default CardContainer;