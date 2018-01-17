import React, { Component } from "react";
import Construction from 'react-icons/lib/go/alert';
import projects from '../data/projects';
import styles from './projects.module.css';
import FaGithub from 'react-icons/lib/fa/github';

class Project extends Component {
  state = {
    slideOpen: false,
    imageLoading: true
  }

  toggleState = () => {
    console.log('toggling slide state');
    this.setState({ slideOpen: !this.state.slideOpen });
  }

  handleClick = (e) => {
    if (window.innerWidth > 768) {
      console.log('big screen, cancel click');
      return;
    }
    console.log('handle click fired');
    this.toggleState();
    e.stopPropagation();
  }

  handleMouse = (e) => {
    if (window.innerWidth <= 768) {
      console.log('small screen, cancel hover');
      return;
    }
    console.log('handle mouse fired');
    this.toggleState();
    e.stopPropagation();
  }

 handleImageLoaded = () => {
   console.log('image loaded fired');
   this.setState({ imageLoading: false })
 }

 handleImageError = () => {
   this.setState({ imageLoading: false })
 }

  render() {
    const isOpen = this.state.slideOpen ? styles.open : '';
    const loaderStatus = this.state.imageLoading ? <div className="loader">Loading...</div> : null ;
    const descStyle = this.state.imageLoading ? {display: 'none'} : {display: 'block'};
    return (
      <li className={styles.CardContainer} onClick={this.handleClick} >
        <div className={styles.imageContainer} onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse}>
          {loaderStatus}
          <p className={styles.description} style={descStyle}>{this.props.project.description}</p>
          <img src={this.props.project.img} alt={this.props.project.name}
            className={[styles.slider, isOpen].join(' ')}
            onLoad={this.handleImageLoaded}
            onError={this.handleImageError}
          />
        </div>
        <div className={styles.metadata} >
          <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>{this.props.project.name}</p>
          <p><span style={{ fontStyle: 'italic' }}>Stack</span>: {this.props.project.stack}</p>
          <div onClick={(e) => e.stopPropagation()} className={styles.projectLinks} >
            <a href={this.props.project.url} target="_blank">URL</a>
            <a href={this.props.project.github} style={{fontSize: '2rem'}} target="_blank"><FaGithub/></a>
          </div>
        </div>
      </li>
    )
  }
}



const ProjectsContainer = (props) => {

  const projects = props.projectList.map((project) => {
    // const projectImg = props.gatsbyImages[project.imgKey];
    // console.log(projectImg);
    return (
      <Project project={project} key={project.name} />
    )
  });

  return (
    <ul className={styles.projectContainer} >
      {projects}
    </ul>
  )
}


export default () => {
  return (
    <div className={[styles.PageContainer, 'page-styles'].join(' ')} >
      <p className="mobile-only" style={{ textAlign: 'center', fontSize: '1rem' }}>( tap on card to read more )</p>
      <p className="desktop-only" style={{ textAlign: 'center', fontSize: '1rem' }}>( hover on card to read more )</p>
      <h3>Client Projects</h3>
      <section className={styles.ClientProjects} >
        <ProjectsContainer projectList={projects.clientProjects} />
      </section>
      <h3 style={{ marginTop: '2rem' }}>Personal Projects</h3>
      <section className={styles.PersonalProjects} >
        <ProjectsContainer projectList={projects.personalProjects} />
      </section>
    </div>
  )
};

// export const query = graphql`
//   query BlurUpQuery {
//     emunahPic: imageSharp(id: { regex: "/emunah.png/" }) {
//       resolutions(width:400, height: 222) {
//         ...GatsbyImageSharpResolutions
//       }
//     }
//     dtPic: imageSharp(id: { regex: "/dt.png/" }) {
//       resolutions(width:400, height: 222) {
//         ...GatsbyImageSharpResolutions
//       }
//     }
//     giliPic: imageSharp(id: { regex: "/gilitowing.png/" }) {
//       resolutions(width:400, height: 222) {
//         ...GatsbyImageSharpResolutions
//       }
//     }
//     colorsPic: imageSharp(id: { regex: "/colors.png/" }) {
//       resolutions(width:400, height: 222) {
//         ...GatsbyImageSharpResolutions
//       }
//     }
//     lordOfWarPic: imageSharp(id: { regex: "/lordofwar.png/" }) {
//       resolutions(width:400, height: 222) {
//         ...GatsbyImageSharpResolutions
//       }
//     }
//     aStarPic: imageSharp(id: { regex: "/astar.png/" }) {
//       resolutions(width:400, height: 222) {
//         ...GatsbyImageSharpResolutions
//       }
//     }
//     fancoPic: imageSharp(id: { regex: "/fancofan.png/" }) {
//       resolutions(width:400, height: 222) {
//         ...GatsbyImageSharpResolutions
//       }
//     }
//   }
// `