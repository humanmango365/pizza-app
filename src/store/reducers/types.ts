import { IPizzaItem } from "../../types"

// STATE TYPES
export interface IPizzasState {
  pizzas: IPizzaItem[] | []
}

export interface IFilterState {
  sortMethod: sortMethodType,
  category: number | null
}

export type sortMethodType = 'popularity' | 'price' | 'alphabet'

// PIZZA REDUCER ACTION TYPES
export enum actionTypes {
  GET_PIZZAS = "GET_PIZZAS",
  SET_SORT_METHOD = "SET_SORT_METHOD",
  SET_CATEGORY = "SET_CATEGORY",
  SORT_BY_POPULAR = "SORT_BY_POPULAR",
  SORT_BY_ALPHABET = "SORT_BY_ALPHABET",
  SORT_BY_PRICE = "SORT_BY_PRICE"
}

// PIZZA REDUCER ACTION CREATORS
export type getPizzasActionType = {
  type: actionTypes.GET_PIZZAS;
  payload: IPizzaItem[];
};

export type setSortMethodActionType = {
  type: actionTypes.SET_SORT_METHOD;
  payload: sortMethodType
}

export type setCategoryActionType = {
  type: actionTypes.SET_CATEGORY;
  payload: number | null
}



// ALL ACTION CREATORS TYPES
export type ActionType = getPizzasActionType
export type FiltersType = setSortMethodActionType | setCategoryActionType