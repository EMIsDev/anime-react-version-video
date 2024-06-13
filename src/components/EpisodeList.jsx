import {
    List, ListItem, ListItemText, Paper
} from "@mui/material";
import {useNavigate} from "react-router-dom";


export default function EpisodeList({animeName,animeChapters}) {
    const navigate = useNavigate()
    return <>
        <h2>Episodios:</h2>
        <Paper className="custom-scrollbar animeChapterList">
            <List>
                {animeChapters.map((chapter, index) => (<ListItem
                        key={index}
                        button
                       className={'animeChapterList__item'}
                    >
                        <ListItemText primary={`Episodio ${chapter.episode}`}  onClick={() => navigate(`/ver/${animeName}-cap-${chapter.episode}`)}/>
                    </ListItem>))}
            </List>
        </Paper>

    </>;
}
