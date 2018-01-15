import React, { Component } from "react";
import Construction from 'react-icons/lib/go/alert';
import projects from '../data/projects';
import styles from './projects.module.css';

class Project extends Component {
  state = {
    slideOpen: false,
    imageLoading: true
  }

  toggleState = () => {
    this.setState({ slideOpen: !this.state.slideOpen });
  }

  toggleOnClick = () => {
    if (window.innerWidth >= 968) {
      console.log('screen is too big, switching to hover');
      return;
    }
    this.toggleState();
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
      <li className={styles.CardContainer} onClick={this.toggleOnClick} >
        <div className={styles.imageContainer} onMouseEnter={this.toggleState} onMouseLeave={this.toggleState}>
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
          <p onClick={(e) => e.stopPropagation()}>
            <a href={this.props.project.url} target="_blank">URL</a>
          </p>
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


export default ({ data }) => {
  console.log(data);
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