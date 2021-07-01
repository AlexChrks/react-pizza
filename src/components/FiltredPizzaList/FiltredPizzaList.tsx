import React, {useEffect} from 'react'
import { IpizzaDescription } from '../../interfaces/interfaces';
import PizzaComponent from '../PizzaComponent/PizzaComponent';
import { 
  filterAllPizza, 
  filterMeatPizza, 
  filterVegetarianPizza, 
  filterSpicyPizza, 
  sortByPrice,
  sortByPopularity, 
  sortByAlphabet 
} from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';


interface FiltredPizzaListPropsInterface {
  title: string
}

const FiltredPizzaList: React.FC<FiltredPizzaListPropsInterface> = ({title}) => {

  const dispatch = useDispatch();
  const pizzaList = useSelector<RootState, IpizzaDescription[]>(state => state.pizzaListReducer);
  const sortingMode = useSelector<RootState, string>(state => state.sortingModeReducer);

  useEffect(() => {
    switch(title) {
      case 'Vegetarian': 
        dispatch(filterVegetarianPizza());
        break
      case 'Meat': 
        dispatch(filterMeatPizza());  
        break
      case 'Spicy': 
        dispatch(filterSpicyPizza());  
        break
      default: 
        dispatch(filterAllPizza())  
    }


    switch(sortingMode) {
      case 'price':
        dispatch(sortByPrice())
        break
      case 'popularity':
        dispatch(sortByPopularity())
        break
      default:
        dispatch(sortByAlphabet())
    }  
  }, [title, dispatch, sortingMode])
  
  

  return (
    <>
      {pizzaList.map((pizza: IpizzaDescription) =>  {
        return (
          <PizzaComponent 
          key={pizza.id}
          id={pizza.id} 
          imgSrc={pizza.image} 
          startPrice={pizza.startPrice} 
          name={pizza.title} 
          availableSizes={pizza.availableSizes}
          availableBase={pizza.availableBase}
          />
        )
      })}
    </>
  )
}

export default FiltredPizzaList
