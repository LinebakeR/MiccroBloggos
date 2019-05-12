const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    //check if there is a token
    if(!token) return res.status(401).json({msg: 'No token, authorization denied'});
    try {
    //Verify token
        //add user from payload
    req.user = jwt.verify(token, config.get('jwtSecret'));
    next();
    }
    catch (e) {
    res.status(400).json({msg: 'Token is not valid...'})
    }
    return token; 
}

module.exports = auth;