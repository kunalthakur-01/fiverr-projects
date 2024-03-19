const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    items: [
        {
            prodId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            prodQuantity: {
                type: Number,
                required: true
            }
        }
    ],
    shippingFee: {
        type: Number,
        required: true
    }
});

cartSchema.methods.addToCart = function (prodId, totalProd) {
    const cartProductIndex = this.items.findIndex(prod => prod.prodId.toString() === prodId);
    // console.log(cartProductIndex);

    let newQuantity = 1;
    const updatedCartItems = [...this.items];
    if(cartProductIndex >=0 && totalProd > 1) {
        newQuantity = updatedCartItems[cartProductIndex].prodQuantity + totalProd;
        updatedCartItems[cartProductIndex].prodQuantity = newQuantity;
    }
    else if (cartProductIndex >= 0) {
        newQuantity = updatedCartItems[cartProductIndex].prodQuantity + 1;
        updatedCartItems[cartProductIndex].prodQuantity = newQuantity;
    }
    else {
        if(totalProd > 1){
            updatedCartItems.push({ prodId, prodQuantity: totalProd });
        }
        else {
            updatedCartItems.push({ prodId, prodQuantity: newQuantity });
        }
    }

    this.items = updatedCartItems;

    return this.save();
};

cartSchema.methods.updateItems = function (prodId, method) {
    const updatedCart = this.items.filter(prod => {
        if (prod.prodId.toString() === prodId && method === 'add') {
            prod.prodQuantity++;
        }

        if (prod.prodId.toString() === prodId && method === 'remove') {
            prod.prodQuantity--;
        }

        return prod.prodQuantity > 0;
    });

    this.items = updatedCart;

    return this.save();
};

module.exports = mongoose.model('Cart', cartSchema);