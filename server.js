const express = require("express");
const dotenv = require("dotenv");

const connectDatabase = require("./config/db");
const postRoutes = require("./routes/postRoutes");

const app = express();

dotenv.config();
const Port = process.env.PORT || 4000;

connectDatabase();

app.use(express.json({limit : "30mb"}));

app.use('/', postRoutes);

app.listen(Port, () => {
    console.log(`Server running on Port http://localhost:${Port}`);
});