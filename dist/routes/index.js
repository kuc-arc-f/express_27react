"use strict";
var express = require('express');
var router = express.Router();
router.get('/test', function (req, res) {
    try {
        res.send({ name: "GET /test" });
    }
    catch (error) {
        res.sendStatus(500);
    }
});
module.exports = router;
