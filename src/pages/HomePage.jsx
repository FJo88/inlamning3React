import {Link} from "react-router-dom"
import { Box } from "@material-ui/core";
import Card from '@mui/material/Card';

const HomePage = (props) => {
    console.log(props)
    
    return ( 
        <div>
            <header>React Forum-inlämningsuppgift 3</header>
            <div>
                {props.posts.map(({title, body, id}, i) =>{
                return (
                <Link to={{
                pathname: `/post/${id}`,
                data: { data: body,
                        title: title}
                }}>
                <Box display="flex" justifyContent="center" alignItems="center" marginBottom={1}>
                    <Card variant="outlined" sx={{ maxWidth: 1400,  color: 'primary.dark' }}>
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