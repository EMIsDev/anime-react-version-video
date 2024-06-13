import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {useUserApi} from "../hooks/useUserApi";
import UserInfo from "../components/UserInfo";
import CardContainer from "../components/CardContainer";
import Pagination from "../components/Pagination";

function ProfilePage() {

    const { userData:{userData, pages}, isLoading, error } = useUserApi()

    if (isLoading) {
        return  <Box>
            <LinearProgress />
        </Box>;
    }

    if (error) {
        return <div>Error: </div>;
    }

    return <>
        <UserInfo userData={userData}/>
        <CardContainer pageTitle={'Tus Series'} animeData={userData.animesSub} error={error} isLoading={isLoading}></CardContainer>
        <Pagination maxPages={pages.maxPages} numElement={pages.numElement} />

         </>;
}
export default ProfilePage;