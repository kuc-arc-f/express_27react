"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var cors = require('cors');
var server_1 = require("react-dom/server");
var App_1 = require("./pages/App");
var routes = require('./routes/index');
var Common_1 = __importDefault(require("./lib/Common"));
var test_1 = __importDefault(require("./routes/test"));
var common_1 = __importDefault(require("./routes/common"));
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
var errorObj = { ret: "NG", messase: "Error" };
app.use(function (req, res, next) {
    var body = req.body;
    var valid = Common_1.default.validApiKey(body);
    if (!valid) {
        errorObj.messase = "Error, Common.validApiKey=false";
        console.log("Error, Common.validApiKey=false");
        res.json(errorObj);
    }
    else {
        next();
    }
});
app.use('/', routes);
app.use('/api/test', test_1.default);
app.use('/api/common', common_1.default);
app.post('/api/post1', function (req, res) {
    try {
        console.log(req.body);
        res.send({ name: "ok, /api/test1" });
    }
    catch (error) {
        res.sendStatus(500);
    }
});
app.get('/api/test1', function (req, res) {
    try {
        console.log("url=", process.env.API_URL);
        res.send({ name: "ok, /api/test1" });
    }
    catch (error) {
        res.sendStatus(500);
    }
});
app.get('/*', function (req, res) {
    try {
        res.send((0, server_1.renderToString)((0, App_1.Csr)()));
    }
    catch (error) {
        res.sendStatus(500);
    }
});
var PORT = 4000;
app.listen({ port: PORT }, function () {
    console.log("Server ready at http://localhost:".concat(PORT));
});
console.log('start');
exports.default = app;
