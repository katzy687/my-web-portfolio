import React, { Component } from "react";
import desertVid from '../assets/desert.mp4';
import BgPic from '../assets/stretch-edit.jpg';
import styles from "./index.module.css";
import Particles from 'react-particles-js';

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
        <div className={styles.bgPic}></div>
        <div className={styles.Hello}>
          <h1>Hi! I'm Natti.</h1>
          <p style={{ color: 'black' }}>
            I build stuff on the web.
          </p>
        </div>
      </main>
    )
  }
}

export default Home;