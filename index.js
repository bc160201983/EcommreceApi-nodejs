const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routers/user");
const authRoute = require("./routers/auth");
const productRoute = require("./routers/product");
const orderRoute = require("./routers/order");
const cartRoute = require("./routers/cart");
var cors = require("cors");
app.use(cors());

dotenv.config();
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/cart", cartRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DBConnection success"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("backend sever is running");
});
