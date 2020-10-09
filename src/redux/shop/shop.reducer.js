import ShopActionTypes from "./shop.types";

import { matchedProduct } from "./shop.utils";

const INITIAL_STATE = {
  collections: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    case ShopActionTypes.MATCH_PRODUCT:
      return {
        ...state,
        collections: matchedProduct(state.shop, action.payload),
      };
    default:
      return state;
  }
};

export default shopReducer;
