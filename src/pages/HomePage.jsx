import {Link} from "react-router-dom"

const HomePage = (props) => {
    console.log(props)
    
    return ( 
        <div>
            <header>React Forum-inlämningsuppgift 3</header>
            <div>
                {props.posts.map(({title, body, id}, i) =>{
                return <Link to=
                {{
                pathname: `/post/${id}`,
                data: {
                    data: body,
                    title: title
                },
                }}
                
                ><h2 key={i}>{title}</h2></Link>
            })}
            </div>
        </div>
     );
}
 
export default HomePage;