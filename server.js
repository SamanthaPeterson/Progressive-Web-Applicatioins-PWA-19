const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
//const apiRoutes = require("./routes/api.js");


const PORT = process.env.PORT || 3001;
//const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget-tracker-pwa";

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget-tracker-pwa", {
  useNewUrlParser: true,
});

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });

// routes
app.use(require("./routes/api.js"));
//app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});