const db = require("../utils/dbConnect");

exports.retrieveImages = (request, response) => {
  // data from user

  db.pool.connect((err, client) => {
    const images = [];
    // query to find image
    const findAllQuery = "SELECT * FROM images";

    // execute query
    client
      .query(findAllQuery)
      .then((output) => {
        const data = output.rows;

        data.forEach((row) => {
          images.push(row);
        });
        response.status(200).send({
          status: "success",
          data: {
            message: "Image Retrieved Successfully!",
            images: images,
          },
        });
      })
      .catch((error) => {
        response.status(401).send({
          status: "failure",
          data: {
            message: "could not retrieve record!",
            error,
          },
        });
      });
  });
};
