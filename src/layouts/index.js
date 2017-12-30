import React from "react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";
import styles from "./index.module.css";
import './index.css';

const ListLink = props =>
  <li>
    <Link to={props.to} activeStyle={{color: 'red', fontSize: '1.2rem', transition: '0.3s'}}>
      {props.children}
    </Link>
  </li>

export default ({ children, location }) => {
  console.log(location);
  const isHomepage = location.pathname === withPrefix("/");
  console.log(isHomepage);
  return(
    <div className={styles.Container} >
      <header>
        <Link to="/" >
          <h3>Natti Katz</h3>
        </Link>
        <nav>
          <ul className={styles.NavList} >
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/projects/">Projects</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </nav>
      </header>
      <div className={styles.Spacer} ></div>
      {children()}
    </div>
  );
};