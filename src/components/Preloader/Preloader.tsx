import React from 'react';
import pizza from '../../images/pizza-round.png'

import styles from './Preloader.module.scss'
const Preloader: React.FC = () => {
  return (
        <div className={styles.preloader_wrapper}>
          <img className={styles.preloader_image} src={pizza} alt="pizza" />
        </div>
  )
}

export default Preloader
