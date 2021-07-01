import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { loadCartState } from '../../store/actions';
import AppHeader from '../AppHeader/AppHeader';
import Cart from '../Cart/Cart';
import PizzaList from '../PizzaList/PizzaList';
import Preloader from '../Preloader/Preloader';
import styles from './App.module.scss';

const App: React.FC = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartState())
    setTimeout(() => {setIsLoaded(true)}, 1000);
  }, [dispatch])

  return (
    
      isLoaded 
      ? 
      <Router>
          <div className={styles.app_wrapper}>
            <div className={styles.content_wrapper}>
              <AppHeader/>
              
              <Redirect to="/" />

              <Switch>
                <Route path="/cart" component={Cart}/>
                <Route path='/' component={PizzaList}/>
              </Switch>

            </div>
          </div>
      </Router>

      : 
      <div className={styles.preloader_wrapper}>
        <Preloader/>
      </div>
  )
}

export default App;
