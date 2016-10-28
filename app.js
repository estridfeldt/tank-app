var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.options('*', cors()); // include before other routes

// API
app.get('/info', function (req, res) {
    res.json(
        {
            "name": "tired one23",
            "owner": "Channel 2"
        });
});

app.post('/command', function(req, res) {

    if(req.body.enemies[0] !== undefined) {
        res.json( {
            command: 'pass'
        });
    } else {
        res.json( {
            command: 'turn-left'
        });
    }

});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
