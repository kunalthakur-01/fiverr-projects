const jwt = require("jsonwebtoken");
const HttpError = require("../models/httpErrorModel");

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS') {
        return next();
    }
    
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            throw new Error('Authentication failed');
        }

        const decodedToken = jwt.verify(token, 'my_secret_key');
        req.user = { userId: decodedToken.userId };
        next();

    } catch (err) {
        const error = new HttpError('Authentication failed, please try again later', 401);
        return next(error);
    }
}