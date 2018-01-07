import React from "react";
import Link from "gatsby-link";
import { withPrefix } from "gatsby-link";
import styles from "./index.module.css";
import './index.css';
import HOME_FONT_COLOR from '../pages/index';

const ListLink = props =>
  <li>
    <Link to={props.to} 
          style={{color: props.color}}
          activeStyle={{color: '#42A5F5', fontSize: '1.3rem', transition: '0.3s'}}
    >
      {props.children}
    </Link>
  </li>

export default ({ children, location }) => {
  const isHomepage = location.pathname === withPrefix("/");
  const headerBackground = !isHomepage ? '#202020' : '';
  const linkColor = !isHomepage ? '#CFD8DC' : '#424242';

  return(
    <div className={styles.Container} >
      <header style={{ background: headerBackground, zIndex: 5 }} >
        <Link to="/"  >
          <h3 style={{ color: linkColor}}>Natti Katz</h3>
        </Link>
        <nav>
          <ul className={styles.NavList} >
            <ListLink to="/about/" color={linkColor}>About</ListLink>
            <ListLink to="/projects/" color={linkColor}>Projects</ListLink>
            <ListLink to="/contact/" color={linkColor}>Contact</ListLink>
          </ul>
        </nav>
      </header>
      {/* <div className={styles.Spacer} ></div> */}
      {children()}
    </div>
  );
};