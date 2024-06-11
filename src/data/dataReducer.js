import { createContext, useContext } from "react";

export const defaultState = () => ({
  loading: false,
  coordinates: [],
});

export const ACTIONS = Object.freeze({
    RELOAD: 'RELOAD',
    LOADING: 'LOADING...',
    SELECT: 'SELECT',
})

export default (state, action) => {
  let output = {
    ...state
  }
  
  switch(action.type) {
    case ACTIONS.LOADING:
      output.loading = !!action.loading;
      break;
    case ACTIONS.RELOAD:
      output.coordinates = action.coordinates || []
      break;
    case ACTIONS.SELECT:
      output.selected = action.selected ? { ...action.selected } : undefined;
      break;
  }

  return output;
}

export const CoordianteContext = createContext({
  ...defaultState(),
  dispatch: () => {}
});