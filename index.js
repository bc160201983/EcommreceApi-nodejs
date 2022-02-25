const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routers/user");
const authRoute = require("./routers/auth");
dotenv.config();
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DBConnection success"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("backend sever is running");
});
