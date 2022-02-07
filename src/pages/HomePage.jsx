// Hämtar imports för att länka samt skapa ett kort i en box där titlarna skrivs ut i.
import {Link} from "react-router-dom"
import { Box } from "@material-ui/core";
import Card from '@mui/material/Card';

const HomePage = (props) => {
// Hämta props från App.js och map:ar ut alla titlar.
// Destructar attributen som behövs. id för att länka path:en samt title för rendering och index för key.

    return ( 
        <div>
            <header>React Forum-inlämningsuppgift 3</header>
            <div>
                {props.posts.map(({title, id}, i) =>{
                return (
                <Link to={{pathname: `/post/${id}`}}>
                    <Box display="flex" justifyContent="center" alignItems="center" marginBottom={1}>
                        <Card variant="elevation" elevation={12} sx={{ maxWidth: 1400,  color: 'primary.dark' }}>
                            <p key={i} className="post"><strong>Title:</strong> {title}</p>
                        </Card>
                    </Box>
                </Link>
                )})}
            </div>
        </div>
     );
}
 
export default HomePage;