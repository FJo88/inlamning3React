import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"

const PostPage = () => {
    const[comments,setComments] = useState([]);

    const { id } = useParams();
    
    useEffect(() => {
        fetch(` https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then((response) => response.json())
          .then((json) => setComments(json));
      }, []);
      console.log(comments);
    return (  
        <div>
            <h1>Comments on Post {id}</h1>
            {comments.map((comment, id) =>{
                return (
                <div key={id} className="postinfo">
                    <p>{comment.body}</p>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                </div>
                )
                
                   
            })}
            <Link to="/"><button className="home">Take me home</button></Link>
        </div>
    );
}
 
export default PostPage;
