import crypto from "node:crypto";

let productCollection = [];

export const createProduct = (productData, productImage) => {
  const newProduct = {
    id: crypto.randomUUID().toString(),
    ...productData,
    imageUrl: productImage,
  };
  productCollection.push(newProduct);

  return newProduct;
};

export const getAllProducts = () => {
  return productCollection;
};

export const getProductById = (productId) => {
  return productCollection.filter((product) => product.id === productId);
};
