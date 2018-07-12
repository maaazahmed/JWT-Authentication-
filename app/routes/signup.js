// var express = require("express")
// var router = express.Router()
// var Model = require("./schema")
// var mongoose = require("mongoose")
// mongoose.connect("mongodb://Studant:maaz1234@ds133041.mlab.com:33041/online-tution")

// router.post("/createacount", (req, res) => {
//     var newUser = new Model({
//         username: req.body.username,
//         Email: req.body.Email,
//         password: req.body.password
//     })
//     newUser.save((error, data) => {
//     })
//     res.send(req.body)

//     console.log(newUser, "___________________________")
// });


// module.exports = router











// ********************************************
// ********************************************
// ********************************************
// ********************************************
// ********************************************






var express = require("express")
var router = express.Router()
var Model = require("./schema")
var mongoose = require("mongoose")
var jwt = require("jsonwebtoken")
// mongoose.connect("mongodb://Studant:maaz1234@ds133041.mlab.com:33041/online-tution")


router.post("/posts", verifyToken, (req, res, next) => {

    console.log(req.token, "====================== L 54")

    jwt.verify( req.token, "createUser", (err, authData) => {
        if (err) {
            res.json({ err })
            // console.log(err)
        }
        else {
            res.json({
                user: "User create ",
                authData
            })
            console.log(authData)
        }
    })
    next()
});

router.post("/createacount", (req, res) => {
    var user = req.body

    jwt.sign({ user }, "createUser", (error, token) => {
        console.log(token, "----------------------token")
        res.json({
            token
        })
    })
    console.log(user)
});


// FORMATE OF TOKEN
// Authorization: BearerHeader

// Verify Token

function verifyToken(req, res, next) {
    // Get auth Header value <access_token>
    const bearerHeader = req.headers["authorization"]
    // console.log(bearerHeader,"++++++++++++++++++++++")
    //  Check if bearer is undefined
    if (typeof bearerHeader !== undefined) {
        // Split at the space
        const bearer = bearerHeader.split(' ')
        // Get token from arry
        const bearerToken = bearer[1];
        // Set The token 
        req.token = bearerToken
        console.log(req.token, "=================== Line 102")
        // next Middleware
        next();
    }
    else {
        // Forbidden
        res.sendStatus(403)
    }

}


module.exports = router











