var express         = require('express'),
    path            = require('path'),
    fs              = require('fs'),
    http            = require('http'),
    //redis           = require('redis'),
    serveStatic     = require('serve-static'),
    morgan          = require('morgan'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    app             = express(),
    request         = require('request'),
    io              = require('socket.io');

//Configuration---------------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'dist')));
//app.use(express.static(path.join(__dirname, 'src')));
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//var redisPub = redis.createClient();
//var redisSub = redis.createClient();
//redisSub.subscribe('global');
//var sslConfig = {
//    key: fs.readFileSync('ssl/file.pem'),
//    cert: fs.readFileSync('ssl/file.crt')
//    pfx: fs.readFileSync('ssl/cert.pfx'),
//    passphrase: 'password'
//};
//if (process.env.NODE_ENV == 'production') {
server = http.createServer(app).listen(process.env.PORT || 9600, function(){
    console.log('Insecure server started with PID ' + process.pid + ' at port ' + (process.env.PORT || 9600) + ', Master.');
//    });
//} else {
//    server = https.createServer(sslConfig, app).listen(process.env.PORT || 9600, function(){
//        console.log('Secure server started with PID ' + process.pid + ' at port ' + (process.env.PORT || 9600) + ', Master.');
//    });
//}
io = io.listen(server);

//Routes----------------------------------------------------------------------------------------
app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '/dist') });
});

//Socket Server------------------------------------------------------------------------------------
//io.sockets.on('connection', function(client) {
//    client.on('connect', function () {
//        console.log('Client connected');
//    });
//    client.on('disconnect', function () {
//        console.log('Client disconnected');
//    });
//});
//Helper Functions------------------------------------------------------------------------
//function mkdirpSync(dirpath) {
//    var parts = dirpath.split('/');
//    for( var i = 1; i <= parts.length; i++ ) {
//        try {
//            fs.mkdirSync( path.join.apply(null, parts.slice(0, i)) );
//        } catch(err) {
//            if ( err.code != 'EEXIST' ) throw err;
//        }
//    }
//}
//function deleteFolderRecursive(path) {
//    if( fs.existsSync(path) ) {
//        fs.readdirSync(path).forEach(function(file,index){
//            var curPath = path + "/" + file;
//            if(fs.lstatSync(curPath).isDirectory()) { // recurse
//                deleteFolderRecursive(curPath);
//            } else { // delete file
//                fs.unlinkSync(curPath);
//            }
//        });
//        fs.rmdirSync(path);
//    }
//};