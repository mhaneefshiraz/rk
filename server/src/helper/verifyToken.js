const env = require('../config/env.config')
const Response = require('../components/response')
const jwt = require('jsonwebtoken');


exports.verifyToken = (req, res, next) => {
    console.log(req.headers['authorization'])
    try {
        let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }

        if (token) {
            jwt.verify(token, env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.send(new Response.ErrorResponse('Token is not valid', err));

                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {

            return res.send(new Response.ErrorResponse('Auth token is not supplied', err));

        }
    }
    catch (err) {
        console.log(err)
        return res.send(new Response.ErrorResponse('Auth token is not supplied', err));

    }
};