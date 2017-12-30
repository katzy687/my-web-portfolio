import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './about.module.css';


const AboutMe = () => (
  <div>
    <p>
      I'm a full-stack web developer with a leaning towards the front end.
      I enjoy planning out mobile first responsive designs and writing clean, functional style code.
    </p>
    <p>When I'm not developing I like to be active (basketball, martial arts, hiking, travelling).
       I'm originally from Cleveland, Ohio, and currently live in Tel Aviv. Just hanging out with extended family.
    </p>
    <p>My relevant skills and tools are referenced below. 
       Or check out my CV if you prefer.
    </p>
  </div>
)

const FrontEndContent = () => (
  <div>
    <h4>// Base</h4>
    <p>HTML5/CSS/Javascript, ES6, Typescript</p>

    <h4>// JS Frameworks</h4>
    <p>React, ReactNative, AngularJS, Angular 5+, NativeScript</p>

    <h4>// CSS and Design</h4>
    <p>Flexbox, CSS Grid, Angular Material, React-SemanticUI</p>

    <h4>// WorkFlow</h4>
    <p>Git, Webpack, Gulp</p>

    <h4>// Various libraries I like</h4>
    <p>anime.js, D3, Lodash, Ramda, GatsbyJS(used for this project!)</p>
  </div>
);

const BackEndContent = () => (
  <div>
    <h4>// NodeJS Frameworks</h4>
    <p>Express, Loopback</p>

    <h4>// Databases I'm familiar with</h4>
    <p>MongoDB, SQL Server, GraphQL(application layer querying), Firebase, AWS</p>

    <h4>// Process Management</h4>
    <p>PM2, Strongloop</p>

    <h4>// NPM Packages I like</h4>
    <p>Passport, Nodemailer, Socket.IO </p>

  </div>
);

const generateNumbers = () => {
  const numbers = [];
  for (let i = 1; i < 26; i++) {
    numbers.push(i);
  }
  console.log(numbers);
  return numbers;
}


const LineNumberContainer = () => {

  const numbers = generateNumbers();

  const LiNumbers = numbers.map((number, index) =>
    <li key={index}>{number}</li>
  );

  return (
    <ul className={styles.NumberContainer} >
      {LiNumbers}
    </ul>
  );
};

const SkillsEditor = (props) => (

  <div className={styles.EditorContainer}>
    <Tabs className={styles.TabsContainer}
      selectedTabClassName={styles.ActiveTab}>
      <TabList className={styles.TabList}>
        <Tab className={styles.Tab} >Front-End</Tab>
        <Tab className={styles.Tab}>Back-End</Tab>
      </TabList>

      <TabPanel className={styles.TabPanel} >
        <LineNumberContainer />
        <FrontEndContent />
      </TabPanel>
      <TabPanel className={styles.TabPanel} >
        <LineNumberContainer />
        <BackEndContent />
      </TabPanel>
    </Tabs>
  </div>
);


export default () => {
  return (
    <div className={styles.PageContainer}>
      <AboutMe />
      <SkillsEditor />
    </div>
  );
};