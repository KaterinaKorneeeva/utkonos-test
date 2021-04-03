// обновление стора

import {extend} from "../../utils";
import {ActionType} from "../store/action";

import items from "../mocks/items";
const initialState = {
  itemsList: items,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_ITEMS:
      return extend(state, {
        itemsList: action.itemsList,
      });
    case ActionType.LOAD_ITEMS:
    return extend(state, {
      itemsList: action.itemsList,
    });
  }

    return state;
  };

  export {reducer};
