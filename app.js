const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path=require("path");

const ownersRouters= require("./routes/ownersRouters");
const usersRouters= require("./routes/usersRouter");
const productsRouters= require("./routes/productsRouters");
const db= require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouters);
app.use("/users", usersRouters);
app.use("/products", productsRouters);

app.get("/", (req,res)=>{
    res.send("hey");
});

app.listen(3000);

