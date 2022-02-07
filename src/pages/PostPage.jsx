// Importerar allt roligt som ska användas.  
import { useParams, Link } from "react-router-dom";
import {useState, useEffect} from "react"
import { Box, Button, CircularProgress } from "@material-ui/core";
import Card from '@mui/material/Card';

// Skapar states samt hämta ändelsen på URL:en
const PostPage = () => {
    const [posts, setPosts] = useState();
    const[comments,setComments] = useState();
    const { id } = useParams();

    // Hämtar data från två endpoints som tar in id:et från useParams();
    // Hämtar data från specifik post samt specifika kommentarer till den posten
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => response.json())
          .then((json) => setPosts(json));
         }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then((response) => response.json())
          .then((json) => setComments(json));
         }, []);
    
         // Skapar en box för kort där man skriver ut Titel samt body inuti. Justerar styling från MUI.
         // Skapar sen en box som sedan renderar kort med kommentarer och efterfrågade attribut.
         // Använder även 2 loader-komponenter som körs så länge datan inte är hämtad.
         // Skapar slutligen en knapp för att länka tillbaka till HomePage.
    return (  
        <div>
            <header>Comments on Post {id}</header>
            <div>
                {posts ? (
                <Box display="flex" justifyContent="center" alignItems="center" marginBottom={3}>
                    <Card variant="outlined" sx={{ maxWidth: 1000, color: 'primary.dark'}}>
                     <div className="post">
                        <p><strong>Title:</strong> {posts.title}</p>
                        <p><strong>Text:</strong> {posts.body}</p>
                    </div>
                    </Card>
                </Box>
                ):(
                <div>
                    <CircularProgress size={180}/>
                </div>  
                )}
                {comments ? (
                comments.map((comment, id) =>{
                return (
                <Box  key={id} display="flex" justifyContent="center" alignItems="center" marginBottom={3}>
                    <Card variant="outlined" sx={{ maxWidth: 800, color: 'info.dark'}}>
                     <div className="card" >
                        <p><strong>Comment:</strong> {comment.body}</p>
                        <p><strong>Name:</strong> {comment.name}</p>
                        <p><strong>E-mail:</strong> {comment.email}</p>
                     </div>
                    </Card>
                </Box>
                )})):
                (
                <div>
                    <CircularProgress size={150}/>
                </div>
                )}
                </div>
                    <Link to="/"><Button variant="contained" color="primary" size="large" id="home"> Take me home</Button></Link>
            </div>
    );
}
 export default PostPage;
