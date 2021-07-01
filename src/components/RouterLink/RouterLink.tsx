import React from 'react'
import { NavLink } from 'react-router-dom'
import { RouterLinkPropsType } from '../../interfaces/interfaces';
import styles from './RouterLink.module.scss';

const RouterLink: React.FC<RouterLinkPropsType> = ({path, title}) => {

  return (
    <li className={title === 'All' ? styles.navLinkAll : styles.navLink}>
      <NavLink activeClassName={styles.active} to={path}>{title}</NavLink>
    </li>
  )
}

export default RouterLink;
