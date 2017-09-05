module.exports = (function () {
    'use-strict';

    const path   = require('path');
    const config = require("../config/config.json")
    const router = require('express').Router()

    router.get('/config', function (req, res, next) {
        res.status(200).json(config)
    })

    router.get('/', function(req, res){
        res.sendFile(path.resolve('./public/assets/views/index.html'));
    })

    return router;
})();