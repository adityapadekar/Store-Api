const express = require("express");
require("dotenv").config();
const notFoundMW = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const products = require("./routes/products");
require("express-async-errors");

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//     res.send('<h1>STORE API</h1><a href="/api/v1/products">products</a>');
// });

app.use("/", products);

app.use(notFoundMW);
app.use(errorHandler);

//listen
const port = process.env.PORT || 8080;

const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
