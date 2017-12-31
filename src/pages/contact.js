import React from "react";
import FaGH from 'react-icons/lib/fa/github-square';
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square';
import FaInsta from 'react-icons/lib/fa/instagram';
import styles from './contact.module.css';

const MyEmail = () => (
  <div>
    <h3 style={{ marginBottom: '1em' }} >Let's talk! Email me at the address below</h3>
    <p>
      <a href="mailto:katzy687@gmail.com">katzy687@gmail.com</a>
    </p>
  </div>
);

const MyCV = () => (
  <h5>For HR reference: a pdf copy of
      my <a href="https://drive.google.com/file/d/1tc6SPWCXhANLEXjL49FNntaaU1KZNC1h/view?usp=sharing" style={{ textDecoration: 'underline' }} target="_blank">
      <span>CV</span>
    </a>
  </h5>
);

const Social = () => (
  <div>
    <h5>You can also find me hangin at:</h5>
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
  <div className="page-spacer">
    <div className="central-container" style={{ textAlign: 'center' }} >
      <MyEmail />
      <MyCV />
      <Social />
    </div>
  </div>
);