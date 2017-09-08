module.exports = (function () {
    'use-strict';

    const path = require('path');
    const config = require("../config/config.json")
    const router = require('express').Router()

    router.get('/config', function (req, res, next) {
        res.status(200).json(config)
    })

    router.get('/', function (req, res) {
        res.sendFile(path.resolve('./public/assets/views/index.html'));
    })

    router.get('/config/skills', function (req, res) {

        var fs = require('fs');

        fs.readFile('./public/assets/raw/skills.json', 'utf8', function (err, data) {

            if (err) {
                res.status(200).json({error: "skills.json not found on server."});
            }
         
            res.send(JSON.stringify(JSON.parse(data), null, 2));
        });
    })

    return router;
})();