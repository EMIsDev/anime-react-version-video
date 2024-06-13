import {
    CardMedia,
    Rating,
    CardActions,
    Chip, Card,
    CardContent, Typography, CardActionArea
} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import BuyButton from "./BuyButton";
export default function AnimeCard({animes}) {
    const navigate = useNavigate();
    const location = useLocation();

    const isProfileRoute = location.pathname === '/profile';

    return (

        <Card>
            <CardActionArea onClick={() => navigate('/anime/' + animes.animeName.replaceAll(' ', '-'))}>
                <CardMedia
                    component="img"
                    alt={animes.animeName}
                    height="270"
                    image={animes.animeImg}
                />
                <CardContent>
                    <Typography>
                        {animes.animeName}
                    </Typography>
                    {animes.animeTags.map((keywords, index) => (
                        <Chip label={keywords} color="success" key={index} />
                    ))}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Rating name="read-only" value={parseFloat(animes.animeRating)} readOnly />
                {!isProfileRoute && (
                   <BuyButton animeName={animes.animeName} animeId={animes._id} animeImg={animes.animeImg}/>
                )}
            </CardActions>
        </Card>


    );
}