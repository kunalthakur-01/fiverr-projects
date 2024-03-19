const HttpError = require('../models/httpErrorModel');
const mongoose = require('mongoose');
const Cart = require('../models/cartModel');

exports.getCart = async (req, res, next) => {
    const userId = req.params.uid;
    // console.log(req.session.isLoggedIn);
    let existingCart;

    try {
        existingCart = await Cart.findOne({ userId }).populate('items.prodId');
    } catch (err) {
        const error = new HttpError('Something went wrong, try again later', 500);
        return next(error);
    }

    res.status(200).json({ userCart: existingCart });

    // try {
    //     existingCart = await Cart.findOne({ userId });
    // } catch (err) {
    //     const error = new HttpError('Something went wrong, try again later', 500);
    //     return next(error);
    // }

    // if (!existingCart) {
    //     const userCart = new Cart({
    //         userId,
    //         items: [],
    //         shippingFee: 100
    //     });

    //     try {
    //         await userCart.save();
    //     } catch (err) {
    //         const error = new HttpError('Invalid data', 400);
    //         return next(error);
    //     }

    //     res.status(201).json({ userCart });
    // }
    // else {
    //     res.status(201).json({ userCart: existingCart });
    // }
};

exports.addToCart = async (req, res, next) => {
    const { userId, prodId, totalProd } = req.body;
    let existingCart;

    try {
        // existingCart = await Cart.findOne({ userId }).populate('userId');
        existingCart = await Cart.findOne({ userId });
    } catch (err) {
        console.log(err);
        const error = new HttpError('Invalid data', 400);
        return next(error);
    }

    if (!existingCart) {
        const userCart = new Cart({
            userId,
            items: [],
            shippingFee: 100
        });

        try {
            const sess = await mongoose.startSession();
            sess.startTransaction();
            await userCart.save({ session: sess });
            await userCart.addToCart( prodId, totalProd );
            await sess.commitTransaction();
        } catch (err) {
            console.log(err);
            const error = new HttpError('Add to cart failed, try again later', 500);
            return next(error);
        }

        res.status(201).json({ userCart });
    }
    else {
        try {
            existingCart = await existingCart.addToCart( prodId, totalProd );
            // console.log(existingCart);

        } catch (err) {
            console.log(err);
            const error = new HttpError('Add to cart failed, try again later!', 500);
            return next(error);
        }
        // res.status(201).json({existingCart});
        res.status(201).json({ userCart: existingCart });
    }
};

exports.deleteItemFromCart = async (req, res, next) => {
    const { userId, prodId } = req.body;
    let existingCart;

    try {
        existingCart = await Cart.findOne({ userId });
        existingCart.items.pull({ prodId });
        await existingCart.save();

    } catch (err) {
        console.log(err);
        const error = new HttpError('Something went wrong, try again later', 500);
        return next(error);
    }

    res.status(200).json({ message: 'Removed item from cart, successfully' });

    // if (existingCart) {
    //     try {
    //         existingCart.items.pull({ prodId });
    //         await existingCart.save();
    //     } catch (err) {
    //         console.log(err);
    //         const error = new HttpError('Something went wrong, try again later', 500);
    //         return next(error);
    //     }

    //     res.status(200).json({ message: 'Remove from cart, successfully' });
    // }
};

exports.updateCart = async (req, res, next) => {
    const { userId, prodId, method } = req.body;

    try {
        const existingCart = await Cart.findOne({ userId });
        await existingCart.updateItems(prodId, method);
    } catch (err) {
        console.log(err);
        const error = new HttpError('Something went wrong, try again later', 500);
        return next(error);
    }

    res.status(200).json({ message: 'cart updated, successfully' });
};