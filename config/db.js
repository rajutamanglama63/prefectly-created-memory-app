const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDatabase = async() => {
    try {
        await mongoose.connect(process.env.mongoURL, {
            useNewUrlParser : true,
            useCreateIndex : true,
            useUnifiedTopology :true,
            useFindAndModify : false
        });
        console.log("MongoDB connection established.");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDatabase;