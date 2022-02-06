import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import { Box, Button, CircularProgress } from "@material-ui/core";
import Card from '@mui/material/Card';


const PostPage = (props) => {
    const[comments,setComments] = useState();
    const { id } = useParams();

    const title = props.location.data.title;
    const body =  props.location.data.data;
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then((response) => response.json())
          .then((json) => setComments(json));
         
      }, []);
      console.log(comments);
    return (  
        <div>
            <header>Comments on Post {id}</header>
            <div>
            <div>
                <Box display="flex" justifyContent="center" alignItems="center" marginBottom={3}>
                    <Card variant="outlined" sx={{ maxWidth: 1000, color: 'text.primary'}}>
                     <div className="post">
                        <p><strong>Title:</strong> {title}</p>
                        <p><strong>Text:</strong> {body}</p>
                    </div>
                    </Card>
                </Box>
            </div>
    
            {comments ? (
            comments.map((comment, id) =>{
                return (    
                <Box  key={id} display="flex" justifyContent="center" alignItems="center" marginBottom={3}>
                    <Card variant="outlined" sx={{ maxWidth: 800, color: 'info.main'}}>
                     <div className="card" >
                        <p><strong>Comment:</strong> {comment.body}</p>
                        <p><strong>Name:</strong> {comment.name}</p>
                        <p><strong>E-mail:</strong> {comment.email}</p>
                     </div>
                    </Card>
                </Box>
                )
            }))
            :(
            <div>
            <CircularProgress size={150}/>
            </div>
            )}
            </div>
            <Link to="/"><Button variant="contained" color="success" size="large" id="home"> Take me home</Button></Link>
        </div>
    );
}
 
export default PostPage;
