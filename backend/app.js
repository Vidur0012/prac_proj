//packages
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require("cors");
const {sequelize} = require("./dbConfig/dbSequelize");
const { errorHandler } = require('./middlewares/errorHandler');
const userRoutes = require('./routes/user.routes.js');

//env variables
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);
app.use(errorHandler);

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection with database has been established successfully.");
        await sequelize.sync();
        app.listen(port, () => {
            console.log("Server started on port:", port);
        });
    }
    catch (err) {
        console.log(err);
    }
})();