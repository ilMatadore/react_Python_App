import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const matchProduct = (product) => ({
  type: ShopActionTypes.MATCH_PRODUCT,
  payload: product,
});
