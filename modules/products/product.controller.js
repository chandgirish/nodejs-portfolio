const ProductQuery = require('./product.query');

function get(req, res, next) {
    // console.log(req.body);
    // const condition = {stockName : req.body.stockName};
    const condition = {}

    ProductQuery.find(condition)
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            next(err);
        })

}

function getById(req, res, next) {
    const condition = {_id : req.params.id}
    ProductQuery.find(condition)
        .then(function(data){
            res.json(data[0]);
        })
        .catch(function(err){
            next(err);
        })

}

function insert(req, res, next) {
    const data = req.body;
    console.log(data);
    // TODO add more information in data
    ProductQuery
        .save(data)
        .then(function(response){
            res.json(response);
        })
        .catch(function(err){
            next(err)
        })
}

function update(req, res, next) {

    const data = req.body;
    ProductQuery.update(req.params.id, data)
        .then(function(data){
            res.json(data)
        })
        .catch(function(err){
            next(err)
        })

}

function remove(req, res, next) {
    ProductQuery.remove(req.params.id)
        .then(function(data){
            res.json(data)
        })
        .catch(function(err){
            next(err);
        })
}


module.exports = {
    get,
    getById,
    insert,
    update,
    remove
}