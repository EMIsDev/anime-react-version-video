import {Avatar, Grid} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate} from "react-router-dom";
function UserInfo({userData}) {

const navigate = useNavigate()

    return (
        <div>
            <Grid container spacing={3} alignItems="center">
                <Grid item>
                    <Avatar>{}</Avatar>
                </Grid>
                <Grid item xs>
                    <h1>{userData.name}</h1>
                </Grid>
                <Grid item >
                    <div onClick={() => navigate("/profile")}>
                        <SettingsIcon/>
                    </div>
                </Grid>
            </Grid>
        </div>
        );
}
export default UserInfo;