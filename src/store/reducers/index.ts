import axios from "axios";
import { Dispatch } from "react";
import { IPizzaItem } from "../../types";
import { ActionType, actionTypes, getPizzasActionType, setCategoryActionType, setSortMethodActionType } from "./types";

export const fetchPizzas = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    const response = await axios.get("http://localhost:3000/db.json");
    dispatch(getPizzasAC(response.data.pizzas));
  };
};

export const getPizzasAC = (payload: IPizzaItem[]): getPizzasActionType => ({
  type: actionTypes.GET_PIZZAS,
  payload,
});

export const setSortMethodAC = (payload: 'popularity' | 'price' | 'alphabet'): setSortMethodActionType => ({
  type: actionTypes.SET_SORT_METHOD,
  payload
})

export const setCategoryAC = (category: number | null): setCategoryActionType => ({
  type: actionTypes.SET_CATEGORY,
  payload: category
})