const express = require("express");
const connectDb = require("./database/connectDb.js")
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const signin = require("./route/signin")
const signup = require("./route/signup")
const cors = require("cors");
const app = express();

dotenv.config();



app.use(express.urlencoded({ extended: true}));

app.use(express.json({ limit : "10mb"}));

app.use(cookieParser());

app.use(cors());


app.use("/", signin);
app.use("/", signup);

app.listen(8000, async()=>{

     await connectDb()
    console.log("server running at 8000")
})