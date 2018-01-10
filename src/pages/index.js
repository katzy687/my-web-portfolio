import React, { Component } from "react";
import desertVid from '../assets/desert.mp4';
import BgPic from '../assets/stretch-edit.jpg';
import styles from "./index.module.css";
import Particles from 'react-particles-js';
// import stretchPic from '../assets/stretch-edit.jpg';

const HOME_FONT_COLOR = '#424242';

class Home extends Component {
  state = {
    videoURL: '../assets/desert.mp4'
  }

  render() {
    // console.log(this.props.location.pathname);
    return (
      <main className={styles.Main} >
        <div className={styles.fullscreenBG}>
          <video className={styles.bgVid} 
                 preload="true" 
                 loop muted autoPlay
          >
            <source src={desertVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* <div className={styles.bgPic}></div> */}
        <div className={styles.Hello}>
          <h1 style={{color: HOME_FONT_COLOR, fontSize: '2.5rem' }}>Hi! I'm Natti.</h1>
          <p style={{ color: HOME_FONT_COLOR, fontSize: '1.2rem' }}>
            I build apps on the web.
          </p>
        </div>
      </main>
    )
  }
}

export default Home;