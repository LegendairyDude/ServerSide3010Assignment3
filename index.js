const express = require("express")
const app = express()
const indexRouter = require("./routes/indexRouter")
require('dotenv').config()


const path = require("node:path")


app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"))

app.use("/", indexRouter)







app.listen(process.env.PORT, () => {
    console.log(`App running on http://localhost:${process.env.PORT}`)
})
