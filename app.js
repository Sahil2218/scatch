const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const path=require("path")
const expresssession = require("express-session")
const flash = require("connect-flash")

const ownersRouters= require("./routes/ownersRouters")
const usersRouters= require("./routes/usersRouter")
const productsRouters= require("./routes/productsRouters")
const indexRouters =require("./routes/index")
require("dotenv").config()

const db= require("./config/mongoose-connection")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(expresssession({
    resave:false,
    saveUninitialized:false,
    secret : process.env.EXPRESS_SESSION_SECRET,
}))
app.use(flash())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine", "ejs")

app.use("/",indexRouters)
app.use("/owners", ownersRouters)
app.use("/users", usersRouters)
app.use("/products", productsRouters)

app.listen(3000)

