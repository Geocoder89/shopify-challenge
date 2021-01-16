const router = require("express").Router();

const upload = require("../utils/multer");
const imageUpload = require("../controllers/imageUpload");
const saveImage = require("../controllers/singleSavedImage");
const getAllImages = require("../controllers/getAllImages");
const getImage = require("../controllers/getSavedImage");
const updateImage = require("../controllers/updateImage");

const multipleImages = require("../controllers/saveMultiple");

const deleteImage = require("../controllers/deleteSavedImage");

// image upload API
router.post("/image-upload", imageUpload.imageUpload);

// persist image in db

router.post("/save-image", saveImage.persistImage);

// to persist multiple images in db

router.post("/multiple", multipleImages.saveMultipleImages);
// to get all images in db

router.get("/all-images", getAllImages.retrieveImages);
// to get persisted image in db

router.get("/get-image/:cloudinary_id", getImage.retrieveImage);

router.put("/update-image/:cloudinary_id", updateImage.updateImage);
router.delete("/delete-image/:cloudinary_id", deleteImage.deleteImage);
// upload multiple images

// router.post(
//   "/multiple",

//   upload.array("multiple_images"),
//   async (req, res, next) => {
//     if (!req.files || underscore.isEmpty(req.files)) {
//       return res.status(400).json({
//         success: false,
//         message: "No files uploaded",
//       });
//     }

//     const files = req.files;
//     try {
//       let urls = [];
//       let multiple = async (path) => cloudinaryUploader(path);

//       for (const file of files) {
//         const { path } = file;
//         console.log("path", file);
//         const newPath = await multiple(path);
//         urls.push(newPath);

//         fs.unlinkSync(path);
//       }
//       if (urls) {
//         let body = req.body;
//         let bodyUser = underscore.extend(body, {
//           multiple_image: urls,
//           // cloudinary_id: multiple.public_id,
//         });

//         let new_user = new User(bodyUser);

//         await new_user
//           .save()
//           .then((savedUser) =>
//             res.status(201).json({
//               success: true,
//               user: savedUser,
//             })
//           )
//           .catch((error) => {
//             return res.json(error);
//           });
//       }

//       if (!urls) {
//         return res.status(400).json({
//           success: false,
//           message: "Resource not found",
//         });
//       }
//     } catch (error) {
//       console.log("err :", error);
//       return next();
//     }
//   }
// );

module.exports = router;
