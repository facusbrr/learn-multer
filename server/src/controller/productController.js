import { createProduct } from "../model/productModel.js";

export const createProductCtrl = (req, res) => {
  const { productImage, name, description, price } = req.body;

  const parsedPrice = parseFloat(price);

  try {
    const product = createProduct(
      {
        name,
        description,
        price: parsedPrice,
      },
      productImage
    );

    res.status(201).json({ msg: "Producto creado con éxito", product });
  } catch (error) {
    console.error(`Error al crear una producto en el controlador: ${error}`);

    res.status(500).json({
      msg: "Error en el servidor al crear un producto",
      error: error.message,
    });
  }
};
