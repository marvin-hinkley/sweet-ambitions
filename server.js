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
    io              = require('socket.io'),
    routes          = require('./routes/routes'),
    mongoose        = require('mongoose');

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

server = http.createServer(app).listen(process.env.PORT || 9600, function(){
    console.log('Server started with PID ' + process.pid + ' at port ' + (process.env.PORT || 9600) + ', Master.');
});

mongoose.connect('mongodb://localhost/sweet_ambitions');
                                       
io = io.listen(server);

//Routes----------------------------------------------------------------------------------------
app.use('/api', routes)(app, mongoose);

//Socket Server------------------------------------------------------------------------------------
//io.sockets.on('connection', function(client) {
//    client.on('connect', function () {
//        console.log('Client connected');
//    });
//    client.on('disconnect', function () {
//        console.log('Client disconnected');
//    });
//});