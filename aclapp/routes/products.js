var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({ message: "Products sent successfully" })
});

router.post('/', function (req, res, next) {
    res.status(200).json({ message: "Product added successfully" })
});

router.put('/', function (req, res, next) {
    res.status(200).json({ message: "Products updated successfully" })
});

router.patch('/', function (req, res, next) {
    res.status(200).json({ message: "Products updated successfully" })
});

router.delete('/', function (req, res, next) {
    res.status(200).json({ message: "Products deleted successfully" })
});
module.exports = router;
