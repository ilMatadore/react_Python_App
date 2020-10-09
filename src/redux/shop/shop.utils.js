export const matchedProduct = (products, productToMatchId) => {
  const matchProduct = products.filter((item, idx) => idx === productToMatchId);

  return matchProduct;
};
