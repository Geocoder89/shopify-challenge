const db = require("../utils/dbConnect");
const cloudinary = require("cloudinary").v2;

exports.deleteImage = (req, res) => {
  const { cloudinary_id } = req.params;

  // delete image from cloudinary
  cloudinary.uploader
    .destroy(cloudinary_id)
    .then(() => {
      // delete image from postgres
      db.pool.connect((err, client) => {
        const deleteQuery = "DELETE FROM images WHERE cloudinary_id = $1";

        const deleteValue = [cloudinary_id];

        // execute deletion query

        client
          .query(deleteQuery, deleteValue)
          .then((result) => {
            res.status(200).json({
              success: true,
              message: "image successfully deleted",
              result,
            });
          })
          .catch((err) => {
            response.status(500).json({
              message: "Image could not be deleted",
              err,
            });
          });
      });
    })
    .catch((error) => {
      response.status(500).json({
        message: failure,
        error,
      });
    });
};
