const Response = require('../components/response')
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var env = require('../config/env.config');
var express = require('express');
var router = express.Router();





exports.authenticate = function (req, res) {

    var email = req.body.email;
    var password = req.body.password;
    var checkPWD;
    console.log(email)
    console.log(password)
    let db = req.app.get('db');
    var validationQuery = `SELECT username,emailid,phoneno,password FROM buddybasket_db.users WHERE emailid = ? LIMIT 0,1`;

    // console.log(validationQuery);
    db.query(validationQuery, [email], function (err, result) {
        var getresult = result;
        if (err) {
            res.send(new Response.ErrorResponse('Server error', err));
        } else {
            if (getresult.length > 0) {
                console.log(password)
                console.log(getresult[0].password)
                bcrypt.compare(password, getresult[0].password, (err, result) => {
                    checkPWD = result;
                    console.log(checkPWD)
                    if (checkPWD) {
                        // console.log(getresult[0])
                        var token = jwt.sign({ 'email': getresult[0].emailid, 'username': getresult[0].username}, env.SECRET_KEY, {
                            expiresIn: 5000
                        });
                    
                        res.send(new Response.SuccessResponse({ token: token,emailid: getresult[0].emailid }, 'User login Successfull'));
                    } else {
                        res.send(new Response.ErrorResponse('Email and password does not match', err));

                    }

                })
            }
            else {
                res.send(new Response.ErrorResponse('Email does not exits', err));

            }
        }
    });


}
exports.generatePassword = function (req, res) {
       console.log(req.body)
    var password = req.body.password
    bcrypt.hash(password, env.saltRounds, (err, hash) => {
        // console.log(hash)
        let db =req.app.get('db');
        password1 = hash
        username=req.body.username;
        email=req.body.email;
        phone=req.body.phone;
        var userquery =`INSERT INTO buddybasket_db.users(username,emailid,phoneno,password)VALUES(?,?,?,?);`

        db.query(userquery,[username,email,phone,password1],function (err,result){
            if(err){
                res.send(new Response.ErrorResponse("Internal server error",err))
            }
            res.status(200).json({'res':result})
        });
    });
}