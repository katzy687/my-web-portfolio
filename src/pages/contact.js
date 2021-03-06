import React from "react";
import FaGH from 'react-icons/lib/fa/github-square';
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square';
import FaInsta from 'react-icons/lib/fa/instagram';
import styles from './contact.module.css';

const MyEmail = () => (
  <div>
    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }} >Let's talk! Email me at the address below</h3>
    <p>
      <a style={{fontSize: '1.5rem'}}  href="mailto:katzy687@gmail.com">katzy687@gmail.com</a>
    </p>
  </div>
);

const MyCV = () => (
  <h5 style={{ fontSize: '1.1rem'}}>For HR reference: a pdf copy of
      my <a href="https://drive.google.com/open?id=1-xjMr3apl2yXOydpuq1ZNk15i7UQSVWX" style={{ textDecoration: 'underline' }} target="_blank">
      <span>CV</span>
    </a>
  </h5>
);

const Social = () => (
  <div>
    <h5 style={{ fontSize: '1.1rem'}}>You can also find me hangin at:</h5>
    <ul className={styles.SocialLinks} >
      <li>
        <a href="https://github.com/katzy687" target="_blank"><FaGH /></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/natti-katz-a50b1488/" target="_blank"><FaLinkedIn /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/katzy687/" target="_blank"><FaInsta /></a>
      </li>
      <li>
        <a href="https://dev.to/katzy687" target="_blank">dev.to</a>
      </li>
    </ul>
  </div>
);

export default () => (
    <div className={styles.pageContainer}>
      <div className={['central-container', 'page-styles'].join(' ')} style={{ textAlign: 'center', height: '100vh'}} >
        <MyEmail />
        <MyCV />
        <Social />
      </div>
    </div>
);