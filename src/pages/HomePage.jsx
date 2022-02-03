import {Link} from "react-router-dom"

const HomePage = (props) => {
    
    return ( 
        <div>
            <h1>React Forum-inlämningsuppgift3</h1>
            
            {props.posts.map((post, userId, id) =>{
                return <Link to=
                {{pathname: `/post/${userId+1}`,}}><h2 key={id}>{post.title}</h2></Link>
            })}
        </div>
     );
}
 
export default HomePage;