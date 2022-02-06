import Homepage from "./pages/HomePage"
import PostPage from "./pages/PostPage"
import { Switch, Route } from "react-router-dom";
import {useState, useEffect} from "react"
import './App.css';

function App() {
  const[posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  console.log(posts);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Homepage posts={posts} {...props}/>}/>
        <Route path="/post/:id" render={(props) => <PostPage {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
