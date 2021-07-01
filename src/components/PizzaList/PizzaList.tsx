import React from 'react';

import FiltredPizzaList from '../FiltredPizzaList/FiltredPizzaList';

import {
  Switch,
  Route,
} from "react-router-dom";

import SortPopup from '../SortPopup/SortSelect';
import { categoriesRouterData } from '../../constants/categoriesRouterData';
import RouterLink from '../RouterLink/RouterLink';
import styles from './PizzaList.module.scss';

const PizzaList: React.FC = () => {

  return (
    <div className={styles.list_wrapper}>
        <nav className={styles.navigation}>
          <ul>
            {categoriesRouterData.map((item, index) => 
              <RouterLink key={index} path={item.path} title={item.title}/>
            )}
          </ul>
          <SortPopup />
        </nav>

        <div className={styles.list}>

        <Switch>
          <Route path="/vegetarian" component={() => <FiltredPizzaList title='Vegetarian'/>}/>
          <Route path="/meat"       component={() => <FiltredPizzaList title='Meat'/>}/> 
          <Route path="/spicy"      component={() => <FiltredPizzaList title='Spicy'/>}/> 
          <Route path="/"           component={() => <FiltredPizzaList title='All'/>}/> 
        </Switch>
        </div>
    </div>
  )
}

export default PizzaList;
