const express = require('express');
const cors = require('cors');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
// Always require and configure near the top
require('dotenv').config();
// Connect to the database
require('./config/database');

const Product = require('./models/product');


const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));


const port = process.env.PORT || 3001;

app.use('/api/users', require('./routes/api/users'));
// Put API routes here, before the "catch all" route
const ensureLoggedIn = require('./config/ensureLoggedIn')
app.use('/api/carts', ensureLoggedIn, require('./routes/api/carts'));
app.use('/api/products', require('./routes/api/products'));



// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
