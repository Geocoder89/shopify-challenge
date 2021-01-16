const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const Q = require("q");

// helper function to upload files on cloudinary

function upload(file) {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  return new Q.Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, (err, res) => {
      if (err) {
        console.log("cloudinary err", err);
        reject(err);
      } else {
        console.log("cloudinary res", res);
        console.log(res.public_id);
        return resolve(res.url);
        // resolve(res.public_id);
      }
    });
  });
}

module.exports.upload = upload;
