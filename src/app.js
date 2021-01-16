const express = require("express");
const vm = require("v-response");
const logger = require("morgan");
const app = express();
const imageRoute = require("../src/routes/user");
const dotenv = require("dotenv");
const port = process.env.PORT || 9000;

dotenv.config();

// db connection

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     vm.log("Connected to mongoDB");
//   })
//   .catch((err) => {
//     console.log(`error in mongoose set up,${err}`);
//   });

// morgan set up

app.use(logger("dev"));
//   Middleware to parse body data

app.use(express.json());

// define user roures

app.use("/", imageRoute);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is listening on port ${port}`);
});
