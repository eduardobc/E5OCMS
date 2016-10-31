var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongo_store = require('connect-mongo')(session);
var app = express();



/* ===== start - router´s path ===== */

var router_back_end = require('./routes/back-end/index');
var router_front_end = require('./routes/front-end/index');
var router_api = require('./routes/api/index');

/* ===== end - router´s path ===== */




/* ===== start - view engine setup ===== */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* ===== end - view engine setup ===== */



/* ===== start - custom config over requests  ===== */

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// set session mongo stors. This create a collection on DB for store sessions
app.use(session({
    secret: 'E5OA5A',
    store: new mongo_store({url:'mongodb://localhost:27017/e5o_cms'}),
    resave: false,
    saveUninitialized: true
}));

/* ===== end - custom config over requests  ===== */



/* ===== start - register public directories ===== */

app.use(express.static(path.join(__dirname, 'public')));

/* ===== start - register public directories ===== */



/* ===== start - register main entry routes ===== */

app.use('/e5o-admin/',router_back_end);
app.use('/',router_front_end);
app.use('/api/',router_api);

/* ===== end - register main entry routes ===== */



/* ===== start - catch 404 and forward to error handler ===== */

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/* ===== end - catch 404 and forward to error handler ===== */



/* ===== start - error handlers ===== */

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

/* ===== end - error handlers ===== */


module.exports = app;
