import { createSelector } from "reselect";

const selectShop = (state) => state.shop

export const selectShopItem= createSelector(
  [selectShop],
  (shop) => shop.shopData
);
export const selectCollectionForPreview = createSelector(
  [selectShopItem],
  (collections) => Object.keys(collections).map((key) => collections[key]),
);

export const selectCollection = collectionUrlParams =>
  createSelector(
    [selectShopItem],
    (shopData)=>shopData[collectionUrlParams]
  );
  