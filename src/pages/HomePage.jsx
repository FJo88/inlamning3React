
import {Link} from "react-router-dom"

const HomePage = (props) => {
    console.log(props)
    
    return ( 
        <div>
            <h1>React Forum-inlämningsuppgift 3</h1>

                {props.posts.map(({title, userId}, id) =>{
                return <Link to=
                {{pathname: `/post/${userId}`,}}><h2 key={id}>{title}</h2></Link>
            })}
        </div>
     );
}
 
export default HomePage;