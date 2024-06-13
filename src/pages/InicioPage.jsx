import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {useAnimeApi} from '../hooks/useAnimeApi'
import Pagination from "../components/Pagination";
import ScrollUpButton from "../components/ScrollUpButton";
import CardContainer from "../components/CardContainer";

function InicioPage({pageTitle}) {


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
        <CardContainer pageTitle={pageTitle} animeData = {animeData} isLoading = {isLoading} error = {error}></CardContainer>
        {pages !== null && pages !== undefined && pages.maxPages && pages.numElement && (
            <Pagination maxPages={pages.maxPages} numElement={pages.numElement} />
        )}
        <ScrollUpButton/>

    </>;
}
export default InicioPage;