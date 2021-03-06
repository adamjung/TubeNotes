var express = require('express');

var app = express();

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);

app.use(express.static('../client/'));
app.use(express.static('../'));

// start listening to requests on port 8000
app.listen(8000);

// export our app for testing and flexibility, required by index.js
module.exports = app;
