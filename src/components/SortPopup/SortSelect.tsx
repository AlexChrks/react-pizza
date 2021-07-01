import React from 'react'
import styles from './SortSelect.module.scss'
import { sortByPrice, sortByPopularity, sortByAlphabet, changeSortingMode } from '../../store/actions';
import { useDispatch } from 'react-redux';
const SortPopup: React.FC = () => {

  const dispatch = useDispatch();
  
  const sortSelectHandler: React.ChangeEventHandler<HTMLSelectElement>  = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch(event.target.value) {
      case 'price':
        dispatch(sortByPrice())
        dispatch(changeSortingMode(event.target.value))
        break
      case 'popularity':
        dispatch(sortByPopularity())
        dispatch(changeSortingMode(event.target.value))
        break
      default:
        dispatch(sortByAlphabet())
        dispatch(changeSortingMode('alphabet'))
    }
  }

  return (
    <div className={styles.select_wrapper}>
      <span>Sort by:</span>
      <select defaultValue='price' className={styles.select} onChange={sortSelectHandler}>
        <option value="price">Price</option>
        <option value="popularity">Popularity</option>
        <option value="alphabet">Alphabet</option>
      </select>
    </div>
  )
}

export default SortPopup
