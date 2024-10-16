import { upload } from "../config/uploadConfig.js";

export const uploadImage = (fieldName) => (req, res, next) => {
  const uploadSingle = upload.single(fieldName);

  uploadSingle(req, res, (error) => {
    if (error || !req.file) {
      console.error(error);

      return res.status(400).json({ message: "Error al subir el archivo" });
    }

    req.body[fieldName] = req.file.filename;

    next();
  });
};
