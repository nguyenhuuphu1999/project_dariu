var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var  homeRouter = require('./routes/Page/Home.js');
var  typeApartmentRouter = require('./routes/Page/Type_Apartment');
var  traiNghiemRouter = require('./routes/Page/Trai_nghiem_truc_tuyen');
var  ActionOtherRouter = require('./routes/Page/Action_other');
var  footerRouter = require('./routes/Page/Footer');
var  aboutRouter = require('./routes/Page/About');
var  communityRouter = require('./routes/Page/Community');
var  khachRouter = require('./routes/Page/Don_tiep_khach');
var  supportRouter = require('./routes/Page/Support');
var  detailsCitytRouter = require('./routes/Page_city_details/details_city');
var  detailsApartmenttRouter = require('./routes/Page_apartment_details/apartment_detail_image');
var  detailsApartmenttRouter2 = require('./routes/Page_apartment_details/apartment_detail_2');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(complete);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/city',homeRouter);
app.use('/typeApartment',typeApartmentRouter);
app.use('/trai_nghiem',traiNghiemRouter);
app.use('/action_other',ActionOtherRouter);
app.use('/footer',footerRouter);
app.use('/about',aboutRouter);
app.use('/community',communityRouter);
app.use('/khach',khachRouter);
app.use('/support',supportRouter);
app.use('/detailscity',detailsCitytRouter);
app.use('/detailsApartment',detailsApartmenttRouter);
app.use('/detailsApartment2',detailsApartmenttRouter2);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
