const ProductModel = require('./product.model');


function map_product_req(product, productDetails) {

    console.log(product);
    if (productDetails.stockName)
        product.stockName = productDetails.stockName

    if (productDetails.transactionType)
        product.transactionType = productDetails.transactionType

    if (productDetails.quantity)
        product.quantity = productDetails.quantity

    if (productDetails.amount)
        product.amount = productDetails.amount

    if (productDetails.transactionDate)
        product.transactionDate = productDetails.transactionDate

    // if(productDetails.totalAmount)
    //     product.totalAmount = productDetails.totalAmount
}

function find(condition) {
    return new Promise((resolve, reject) => {
        ProductModel
            .find(condition)
            .sort({
                _id: -1
            })
            .exec()
            .then((data) => {
                console.log(data);
                // resolve(data);
                var totalSell = 0;
                var totalBuy = 0;

                data.forEach((product) => {
                    console.log(product);
                    console.log(`${product.amount},${product.quantity}`);
                    if (product.transactionType === "sell") {
                        totalSell = totalSell + (product.quantity * product.amount)
                    } else {
                        totalBuy = totalBuy + (product.quantity * product.amount)
                    }
                })

            // const product = data[0]

                const total = {
                    // "stockName" : product?.stockName ?? "N/A",
                    "totalSell": totalSell,
                    "totalBuy": totalBuy,
                    "totalBalance" : (totalSell - totalBuy)
                }

                resolve(total);
                // console.log(total);
            })
    })
    // return ProductModel
    //     .find(condition)
    //     .sort({
    //         _id : -1
    //     })
    //     .exec()
    //     .then((data) => {

    //     })
}

function save(data) {

    const newProduct = new ProductModel({});
    map_product_req(newProduct, data);
    return newProduct.save();
}

function update(id, data) {
    return new Promise(function (resolve, reject) {
        ProductModel.findById(id, function (err, product) {
            if (err) {
                return reject(err)
            }
            if (!product) {
                return reject({
                    msg: "Product Not Found",
                    status: 404
                })
            }
            map_product_req(product, data);
            product.save(function (err, updated) {
                if (err) {
                    return reject(err)
                }
                resolve(updated)
            });
        })
    })

}

function remove(id) {
    return new Promise(function (resolve, reject) {
        ProductModel.findById(id, function (err, product) {
            if (err) {
                return reject(err);
            }
            if (!product) {
                return reject({
                    msg: "Product not found",
                    status: 404
                })
            }
            product.remove(function (err, removed) {
                if (err) {
                    return reject(err)
                }
                resolve(removed);
            })
        })
    })

}

module.exports = {
    find,
    save,
    update,
    remove
}