import React, { Component } from "react";
import Construction from 'react-icons/lib/go/alert';
import dtMobile from '../assets/DT/DT-Mobile.png';
import projects from '../data/projects';
import styles from './projects.module.css';
console.log(projects);

class Project extends Component {
  state = { slideOpen: false }

  toggleState = () => {
    this.setState({ slideOpen: !this.state.slideOpen});
  }

  render() {
    const isOpen = this.state.slideOpen ? styles.open : '';
    console.log('render fired');
    console.log(this.state.slideOpen);
    return (
      <li  className={styles.CardContainer} onClick={this.toggleState}>
        <div className={styles.imageContainer} >
          <p className={styles.description} >{this.props.project.description}</p>
          <img src={this.props.project.img} alt={this.props.project.name} 
               className={[styles.slider, isOpen].join(' ')} />
        </div>
        <div className={styles.metadata} >
          <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>{this.props.project.name}</p>
          <p>stack: {this.props.project.stack}</p>
          <a href={this.props.project.url}>url</a>
        </div>
      </li>
    )
  }
}



const ProjectsContainer = (props) => {

  const projects = props.projectList.map((project) => {
    return (
      <Project project={project} key={project.name}/>
    )
  });

  return (
    <ul className={styles.projectContainer} >
      {projects}
    </ul>
  )
}


export default () => (
  <div className={[styles.PageContainer, 'page-styles'].join(' ')} >
    <p style={{textAlign: 'center', fontSize: '1.5rem'}}>(click/tap on card to read more)</p>
    <h3>Client Projects</h3>
    <section className={styles.ClientProjects} >
      <ProjectsContainer projectList={projects.clientProjects} />
    </section>
    <h3 style={{ marginTop: '2rem' }}>Personal Projects</h3>
    <section className={styles.PersonalProjects} >
      <ProjectsContainer projectList={projects.personalProjects} />
    </section>
  </div>
);