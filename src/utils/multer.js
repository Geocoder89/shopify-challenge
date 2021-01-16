const multer = require("multer");
const path = require("path");
// specify storage engine

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  // storage system
  storage: storage,
  //   limit
  limits: { fileSize: 1024 * 1024 },

  // file validation
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});

module.exports = upload;
