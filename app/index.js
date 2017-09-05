const express    = require('express')
const bodyParser = require('body-parser')
const routes     = require("./routes.js")
const config     = require("../config/config.json")

const app = express()

// set the static files location public for use
app.use(express.static('public/assets'));

app.use(bodyParser.json({
    limit: config.bodyLimit,
    type: config.bodyLimitType
}))

app.use('/', routes)

const server = app.listen(config.port, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("%s server listening on port %s ...", host, port);
});