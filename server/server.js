const express = require('express');
const path = require('path');
const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const cors = require('cors');
const Bilboard = require('./api/routes/bilboardRouter');
const Place = require('./api/routes/placeRouter');
// const routes = require('./api/routes/index');
const app = express();

//view engine setup
// app.set('views', path.join(__dirname, 'api/views'));
// app.set('view engine', 'pug');

// app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

//the default view
// app.get('/', (req, res) => {
//     res.render('index');
// });

app.use('/bilboards', Bilboard);
app.use('/places', Place);

app.listen(3000);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500)
        .json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    .json({
        message: err.message,
        error: err
    });
});

module.exports = app;