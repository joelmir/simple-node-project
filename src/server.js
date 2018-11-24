const restify = require("restify");

const serverPort = 8888;
let server = {};

const _declareCorsHeaders = () => {
    server.use(
        function crossOrigin(req, res, next){
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            return next();
        }
    )
}

const _addExceptionHandling = () => {
    server.on('NotFound', (req, res, route, er) =>
        res.send(404, {
            "error": "Service not registered!",
            "code": 404
         })
    )
}

const _declareDefaultRoute = () => {
    server.get('/test/test', (req, res) => {
        res.send(200, {
            "success": true
        });
        next();
    })

}

const init = () => {
    server = restify.createServer({handleUncaughtExceptions: true});
    server.use(restify.plugins.bodyParser({mapParams: true}));
    
    _declareCorsHeaders();
    _addExceptionHandling();
    _declareDefaultRoute();

    server.listen(serverPort, () => {
        console.info(`Server listen on port ${serverPort}`)
    });
}

module.exports = {
    init
}