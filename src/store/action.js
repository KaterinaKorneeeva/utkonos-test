import items from "../mocks/items";
import {itemsByCode} from "../items";

export const ActionType = {
  UPDATE_ITEMS: `UPDATE_ITEMS`,
  LOAD_ITEMS: `LOAD_ITEMS`,
};


export const ActionCreator = {

  updateData: (code) => {
    return {
      type: ActionType.UPDATE_ITEMS,
      itemsList: itemsByCode(code, items)

    };
  },
  loadData: () => {
    return {
      type: ActionType.LOAD_ITEMS,
      itemsList: items
    };
  },
};


