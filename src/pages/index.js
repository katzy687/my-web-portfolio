import React, { Component } from "react";
import desertVid from '../assets/desert.mp4';
import styles from "./index.module.css";

class Home extends Component {
  state = {
    videoURL: '../assets/desert.mp4'
  }

  render() {
    // console.log(this.props.location.pathname);
    return (
      <main className={styles.Main} >
        <video className={styles.BackgroundVid} 
               preload="true" loop muted autoPlay>
          <source src={desertVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.Hello}>
          <h1>Hi! I'm Natti.</h1>
          <p>
            I make stuff on the web.
          </p>
        </div>
      </main>
    )
  }
}

export default Home;