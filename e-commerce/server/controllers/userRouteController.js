const HttpError = require('../models/httpErrorModel');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    // req.session.isLoggedIn = true;
    let existingUser;

    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        console.log(err)
        const error = new HttpError('Login failed!', 500);
        return next(error);
    }

    if (!existingUser) {
        const error = new HttpError('No account exist', 401);
        return next(error);
    }


    let doMatch;
    try {
        doMatch = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        const error = new HttpError('Something went wrong!', 500);
        return next(error);
    }

    if (!doMatch) {
        const error = new HttpError('Invalid Credential!', 401);
        return next(error);
    }

    let token;
    try{
        token = jwt.sign({ userId: existingUser._id, email: existingUser.email }, 'my_secret_key', { expiresIn: '1h' });
    } catch(err) {
        const error = new HttpError('Creating token failed!', 500);
        return next(error);
    }

    // req.session.isLoggedIn = true;
    res.status(200).json({ userName: existingUser.name, userId: existingUser._id, email: existingUser.email, token, imageUrl: existingUser.imageUrl });
}


exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;

    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        console.log(err)
        const error = new HttpError('Signup failed!', 500);
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError('Account already exist!', 422);
        return next(error);
    }

    let hashedPassword;

    try {

        hashedPassword = await bcrypt.hash(password, 12);

    } catch (err) {
        console.log(err)
        const error = new HttpError('Could not create a user', 500);
        return next(error);
    }

    const createdUser = new User({
        name,
        email,
        password: hashedPassword,
        imageUrl: req.file.path
    });

    try {
        await createdUser.save();
        // console.log(response);
    } catch (err) {
        console.log(err)
        const error = new HttpError('Signup failed!', 500);
        return next(error);
    }

    let token;
    try{
        token = jwt.sign({ userId: createdUser._id, email: createdUser.email }, 'my_secret_key', { expiresIn: '1h' })
    } catch(err) {
        const error = new HttpError('Creating token failed!', 500);
        return next(error);
    }

    res.status(201).json({ userName: createdUser.name, userId: createdUser._id, email: createdUser.email, token, imageUrl: createdUser.imageUrl });
};