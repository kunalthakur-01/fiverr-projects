const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://kunal-thakur:kunal25@cluster0.bfzhgmk.mongodb.net/e-commerce?retryWrites=true&w=majority')
    .then(client => {
        console.log('connected');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
    });
};

const getDb = () => {
    if(_db){
        return _db;
    }
    return 'No database found';
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;