import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './about.module.css';
import { frontEndSkills, backEndSkills } from '../data/skills';

const AboutMe = () => (
  <div>
    <p style={{ marginBottom: '0.5em' }}>So a bit about myself.</p>
    <p>
      I'm a full-stack web developer with a leaning towards the front end.
      I enjoy planning out mobile first responsive designs and writing clean, functional style code.
    </p>
    <p>When I'm not developing I like to be active (basketball, martial arts, hiking, travelling).
       I'm originally from Cleveland, Ohio, and I now live in Tel Aviv, Israel.
    </p>
    <p>My relevant skills and tools are referenced below.</p>
  </div>
)

function setTrailingComma(arr, index) {
  return arr.length - 1 === index ? null : ',';
}

const SkillsContent = (props) => {

  const skillsKeys = Object.keys(props.skillsObj);

  const skillsKeysJSX = skillsKeys.map((key, index, arr) => {
    const trailingComma = setTrailingComma(arr, index);
    return (
      <li key={key} className={styles.constName} style={{ margin: 0 }} >
        {key}{trailingComma}
      </li>
    )
  });

  const skillItems = skillsKeys.map((skillKey) => {
    const skillKeyArr = props.skillsObj[skillKey];

    const skillKeyArrJSX = skillKeyArr.map((item, index, arr) => {
      const trailingComma = setTrailingComma(arr, index);
      return (
        <li key={item} className={styles.string} style={{ margin: '0' }}>
          '{item}'{trailingComma}
        </li>
      )
    });

    return (
      <li key={skillKey}>
        <span className={styles.const} >const </span>
        <span className={styles.constName} >{skillKey}</span> = [
          <ul style={{ margin: '0 0 0 1rem' }}>
          {skillKeyArrJSX}
        </ul>
        ];
      </li>
    )
  })

  return (
    <div>
      <ul style={{ marginLeft: 0 }}>
        {skillItems}
      </ul>
      <p style={{ margin: 0 }} >
        <span className={styles.const} >const</span> <span className={styles.constName} >{props.skillsTitle}</span> = {'{'}
      </p>
      <ul style={{ marginBottom: 0 }}>
        {skillsKeysJSX}
      </ul>
      <p>{'};'}</p>
    </div>
  )
};

const FrontEndContent = () => (
  <div>
    <p><span className={styles.export}>import</span> <span className={styles.constName}>backEndSkills</span> <span className={styles.export} >from</span> <span className={styles.string}>'./back-end.js';</span></p>
    <SkillsContent skillsObj={frontEndSkills} skillsTitle="frontEndSkills" />
    <p style={{ margin: 0 }} >
      <span className={styles.const} >const</span> <span className={styles.constName} >mySkills</span> = {'{'}
    </p>
    <ul style={{ marginBottom: 0 }}>
      <li className={styles.constName} style={{margin:0}} >frontEndSkills,</li>
      <li className={styles.constName} style={{margin:0}} >backEndSkills</li>
    </ul>
    <p>{'};'}</p>
    <p><span className={styles.export} >export default</span> <span className={styles.constName}>mySkills</span>;</p>
  </div>
  
)

const BackEndContent = () => (
  <div>
    <SkillsContent skillsObj={backEndSkills} skillsTitle="backEndSkills" />
    <p><span className={styles.export}>export default</span> <span className={styles.constName}>backEndSkills</span>;</p>
  </div>
  
)

const generateNumbers = () => {
  const numbers = [];
  for (let i = 1; i < 70; i++) {
    numbers.push(i);
  }
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
        <Tab className={styles.Tab} >front-end.js</Tab>
        <Tab className={styles.Tab}>back-end.js</Tab>
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
      <div className={styles.ContentContainer}>
        <AboutMe />
        <SkillsEditor />
      </div>
    </div>
  );
};