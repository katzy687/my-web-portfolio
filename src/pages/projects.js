import React, { Component } from "react";
import Construction from 'react-icons/lib/go/alert';
import projects from '../data/projects';
import styles from './projects.module.css';
import Img from "gatsby-image";

class Project extends Component {
  state = { slideOpen: false }

  toggleState = () => {
    this.setState({ slideOpen: !this.state.slideOpen });
  }

  render() {
    const isOpen = this.state.slideOpen ? styles.open : '';
    return (
      <li className={styles.CardContainer} onClick={this.toggleState}>
        <div className={styles.imageContainer} >
          <p className={styles.description} >{this.props.project.description}</p>
          {/* <img src={this.props.projectImg.sizes} alt={this.props.project.name}
            className={[styles.slider, isOpen].join(' ')} /> */}
          <Img
            title={this.props.project.name}
            resolutions={this.props.projectImg.resolutions}
            className={[styles.slider, isOpen].join(' ')}
            outerWrapperClassName={styles.GatsbyImgOuterWrapper}
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
    const projectImg = props.gatsbyImages[project.imgKey];
    console.log(projectImg);
    return (
      <Project project={project} key={project.name} projectImg={projectImg} />
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
      <p style={{ textAlign: 'center', fontSize: '1rem' }}>(click/tap on card to read more)</p>
      <h3>Client Projects</h3>
      <section className={styles.ClientProjects} >
        <ProjectsContainer projectList={projects.clientProjects} gatsbyImages={data} />
      </section>
      <h3 style={{ marginTop: '2rem' }}>Personal Projects</h3>
      <section className={styles.PersonalProjects} >
        <ProjectsContainer projectList={projects.personalProjects} gatsbyImages={data} />
      </section>
    </div>
  )
};

export const query = graphql`
  query BlurUpQuery {
    emunahPic: imageSharp(id: { regex: "/emunah.png/" }) {
      resolutions(width:400, height: 222) {
        ...GatsbyImageSharpResolutions
      }
    }
    dtPic: imageSharp(id: { regex: "/dt.png/" }) {
      resolutions(width:400, height: 222) {
        ...GatsbyImageSharpResolutions
      }
    }
    giliPic: imageSharp(id: { regex: "/gilitowing.png/" }) {
      resolutions(width:400, height: 222) {
        ...GatsbyImageSharpResolutions
      }
    }
    colorsPic: imageSharp(id: { regex: "/colors.png/" }) {
      resolutions(width:400, height: 222) {
        ...GatsbyImageSharpResolutions
      }
    }
    lordOfWarPic: imageSharp(id: { regex: "/lordofwar.png/" }) {
      resolutions(width:400, height: 222) {
        ...GatsbyImageSharpResolutions
      }
    }
    aStarPic: imageSharp(id: { regex: "/astar.png/" }) {
      resolutions(width:400, height: 222) {
        ...GatsbyImageSharpResolutions
      }
    }
    fancoPic: imageSharp(id: { regex: "/fancofan.png/" }) {
      resolutions(width:400, height: 222) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`