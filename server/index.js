const express = require("express");
const cors = require("cors")
const { connection } = require("./config/db");
const { userRouter } = require("./routes/userRouter");
const { auth } = require("./middleware/auth.middleware");
const { productRouter } = require("./routes/productRoutes");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use("/user", userRouter);
app.use("/products", productRouter);

app.get("/", auth, (req, res) => {
    res.send("Home Page")
})

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`The server is running at port ${PORT} and db is connected`);
    } catch (error) {
        console.log(error);
    }
})