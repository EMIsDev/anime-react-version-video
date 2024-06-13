import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {useAnimeApi} from '../hooks/useAnimeApi'
import AnimeInfo from "../components/AnimeInfo";

function AnimePage() {

    const { animeData, isLoading, error } = useAnimeApi();

    if (isLoading) {
        return  <Box>
            <LinearProgress />
        </Box>;
    }

    if (error) {
        return <div>Error: </div>;
    }

    return <>
      <AnimeInfo animeData = {animeData} isLoading = {isLoading} error = {error}/>
    </>;
}
export default AnimePage;