const app = require("express")();
const productRouter = require("./model/product");

app.use("/api/product", productRouter);

app.listen("3000");
