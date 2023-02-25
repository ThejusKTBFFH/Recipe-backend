const mongoose = require("mongoose");

mongoose.set("strictQuery",false);

const connectDB=()=>{
    mongoose.connect("mongodb+srv://thejus:thejus@cluster0.ihzu0ac.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("Database is connected");
    })
}

module.exports = connectDB;