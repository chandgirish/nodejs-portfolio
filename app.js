const express = require('express');
const app = express();

const cors = require('cors');
const path = require('path');


require('./db');

const morgan = require('morgan');


app.use(morgan('dev'));


app.use(cors());
//import api route
const APIRoute = require('./api.route');




//Parsers

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());


//load routing level middleware
app.use('/api', APIRoute);


//application level middleware acting as 404
// app.use(function (req, res, next) {
//     next({
//         msg: "Not Found",
//         status: 404
//
//     })
// })


//error handling middleware
// app.use(function (err, req, res, next) {
//     console.log("error is >", err);
//     res.json({
//         msg: err.msg || err,
//         status: err.status || 400
//     })
// })


app.listen(9000, function (err, done) {
    if (err) {
        console.log('server listening failed');
    } else {
        console.log('server listening at port 9000');
    }
})