const mongoose = require("mongoose")
require("dotenv").config()

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to Database"))
    .catch((error) => {
        console.log("DB Connection failed");
        console.log(error);
        process.exit(1);
    })
}