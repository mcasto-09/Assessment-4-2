import React,{ useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  let [count, setCounter] = useState(0);
  const click = () => {
    setCounter(count + 1);
  };
  const repost = () => {
    return alert('Reposted')
  }

  function deletePhoto() {
    this.props.delete
  }
  

  return (
    <div>
      <div className="header">
        <h1>Home</h1>
        <h2 className="forYou">For You</h2>
        <h2 className="following">Following</h2>
      </div>
      <div className="text">
        <p>look at this dude i found</p>
      </div>
      <img className="catStare" src="https://i.kym-cdn.com/entries/icons/facebook/000/043/403/cover3.jpg"></img>
      <div className="responses">
        <button className="like" onClick={click}>Likes:{count}</button>
        <button className="repost" onClick={repost}>Repost</button>
        <button className="comment" type="text">Comment</button>
        <button className="deletePost">Delete Post</button>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        <p className="user1"> User 1:  </p>
      </div>
    </div>
  );
}

export default App;