import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";

// Storage
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "../server/src/uploads");
  },
  filename: (req, file, cb) => {
    const fileName =
      crypto.randomUUID().toString() + path.extname(file.originalname);

    cb(null, fileName);
  },
});

// Limits
const maxMb = 20;
const limits = { fileSize: 1024 * 1024 * maxMb };

// Filter
const fileFilter = (req, file, cb) => {
  const fileType = /jpg|png/; //Expresion regular
  const allowExtName = fileType.test(path.extname(file.originalname));

  if (!allowExtName) {
    return cb(new Error("Solo se permiten imágenes"));
  }

  return cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
  limits,
});
