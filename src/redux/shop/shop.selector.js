import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItem = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const matchedProduct = createSelector(
  [selectShop],
  (shop) => shop.collections
);
