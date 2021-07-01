import {
  filterAllPizzaActionType, 
  filterMeatPizzaActionType, 
  filterVegetarianPizzaActionType, 
  filterSpicyPizzaActionType,
  sortByPriceActionType,
  sortByPopularityActionType,
  sortByAlphabetActionType,
  changeSortingModeActionType,
  sortingModeParameterType,
  cartPizzaInterface,
  addNewPizzaToCartActionType,
  clearCartActionType,
  cartPizzaStateInterface,
  reduceCountActionType,
  increaseCountActionType,
  deleteOrderActionType,
  loadCartStateActionType,
} from '../interfaces/interfaces'

import { 
  FILTER_ALL_PIZZA, 
  FILTER_MEAT_PIZZA, 
  FILTER_VEGETARIAN_PIZZA, 
  FILTER_SPICY_PIZZA, 
  SORT_BY_PRICE,
  SORT_BY_POPULARITY,
  SORT_BY_ALPHABET,
  CLEAR_CART,
  CHANGE_SORTING_MODE,
  ADD_NEW_PIZZA_TO_CART,
  REDUCE_COUNT,
  INCREASE_COUNT,
  DELETE_ORDER,
  LOAD_CART_STATE

} from '../constants/actionTypes'


export const filterAllPizza = (): filterAllPizzaActionType=> {
  return {
    type: FILTER_ALL_PIZZA,
  }
}

export const filterMeatPizza = (): filterMeatPizzaActionType => {
  return {
    type: FILTER_MEAT_PIZZA,
  }
}

export const filterVegetarianPizza = (): filterVegetarianPizzaActionType => {
  return {
    type: FILTER_VEGETARIAN_PIZZA,
  }
}

export const filterSpicyPizza = (): filterSpicyPizzaActionType => {
  return {
    type: FILTER_SPICY_PIZZA,
  }
}

export const sortByPrice = (): sortByPriceActionType => {
  return {
    type: SORT_BY_PRICE,
  }
}

export const sortByPopularity = (): sortByPopularityActionType => {
  return {
    type: SORT_BY_POPULARITY,
  }
}

export const sortByAlphabet = (): sortByAlphabetActionType => {
  return {
    type: SORT_BY_ALPHABET,
  }
}

// _________________________________

export const changeSortingMode = (mode: sortingModeParameterType): changeSortingModeActionType => {
  return {
    type: CHANGE_SORTING_MODE,
    payload: mode
  }
}

export const addNewPizzaToCart = (pizza: cartPizzaInterface): addNewPizzaToCartActionType => {
  return {
    type: ADD_NEW_PIZZA_TO_CART,
    payload: pizza
  }
}

export const clearCart = (): clearCartActionType => {
  return {
    type: CLEAR_CART
  }
}

export const reduceCount = (newCartState: cartPizzaStateInterface[] | []) : reduceCountActionType  => {
  return {
    type: REDUCE_COUNT,
    payload: newCartState
  }
}

export const increaseCount = (newCartState: cartPizzaStateInterface[]): increaseCountActionType => {
  return {
    type: INCREASE_COUNT,
    payload: newCartState
  }
}

export const deleteOrder = (newCartState: cartPizzaStateInterface[] | []): deleteOrderActionType => {
  return {
    type: DELETE_ORDER,
    payload: newCartState
  }
}

export const loadCartState = (): loadCartStateActionType => {
  return {
    type: LOAD_CART_STATE
  }
}


