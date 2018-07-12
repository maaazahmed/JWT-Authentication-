var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var cors = require("cors")
var signUp = require("./routes/signup")


app.set("prot", process.env.PORT || 8080)
app.use(bodyParser.json({ limit: "500kb" }))
app.use(cors());
app.use(signUp)



app.listen(app.get("prot"), (err, succ) => {
    console.log(`Server is runing on port ${app.get("prot")}`)
})
