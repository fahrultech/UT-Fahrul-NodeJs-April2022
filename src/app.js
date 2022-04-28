const express = require('express');
const morgan = require('morgan');
const { protect, admin } = require('./middleware/authMiddleware')

const api = require('./app/api')
const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use('/api/v1', api)


module.exports = app;