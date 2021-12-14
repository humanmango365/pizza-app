import { ActionType, actionTypes, IPizzasState } from "./types";

const initialState: IPizzasState = {
  pizzas: [],
};

const pizzasReducer = (
  state: IPizzasState = initialState,
  action: ActionType
): IPizzasState => {
  switch (action.type) {
    case actionTypes.GET_PIZZAS:
      return {
        ...state,
        pizzas: action.payload,
      };
    default:
      return state;
  }
};

export default pizzasReducer;
