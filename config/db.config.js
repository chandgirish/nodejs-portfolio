const mongodb = require('mongodb');
const conxnURL = "mongodb://localhost:27017";
const dbName = 'Portfolio';
const OID = mongodb.ObjectId;

module.exports = {
    conxnURL,
    dbName,
    OID
}