import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import  {useParams} from 'react-router-dom';
import CardContainer from "../components/CardContainer";
import {useAnimeApi} from "../hooks/useAnimeApi";
import Pagination from "../components/Pagination";
import ScrollUpButton from "../components/ScrollUpButton";

function SearchPage() {
    const params = useParams();

    const { animeData: { animeData, pages }, isLoading, error } = useAnimeApi()

    if (isLoading) {
        return  <Box>
            <LinearProgress />
        </Box>;
    }

    if (error) {
        return <div>Error: </div>;
    }

    return <>
        <CardContainer pageTitle={params.animeName} animeData = {animeData} isLoading = {isLoading} error = {error}></CardContainer>
            <Pagination maxPages={pages.maxPages} numElement={pages.numElement} />
        <ScrollUpButton/>

    </>;
}
export default SearchPage;