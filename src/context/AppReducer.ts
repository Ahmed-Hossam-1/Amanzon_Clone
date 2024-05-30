import { TAction, TinitailState, TItem } from "../types/types";

export const initialState: TinitailState = {
  basket: [],
  user: null,
};

const AppReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item: TItem) => item.id !== action.id),
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default AppReducer;
