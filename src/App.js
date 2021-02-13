import React from 'react';
import './style.css';

function App() {
  return (
    <>
      <div style={{border : "solid 1px black", maxWidth : "100vw"}}>
        <h1 className = "title red">Your name here</h1>
        <br/>
        <img src="./imageInSrc.jpg"/>
        <br/>
        <img src="/imageInPublic.jpg"/>
      </div>
      <video width="320px" height="240px" controls>
        <source src="myVideo.mp4" type="video/mp4"/>
      </video>
    </>
  );
}

export default App;