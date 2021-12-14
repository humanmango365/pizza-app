import { actionTypes, FiltersType, IFilterState } from "./types"

const initialState: IFilterState = {
  sortMethod: "popularity",
  category: null
}

const filterReducer = (state: IFilterState = initialState, action: FiltersType): IFilterState => {


  switch(action.type) {
    case actionTypes.SET_SORT_METHOD:
      return {
        ...state,
        sortMethod: action.payload
      }
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    default: 
      return state
  }
}

export default filterReducer