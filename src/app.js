const express = require('express');
const morgan = require('morgan');
const { protect, admin } = require('./middleware/authMiddleware');
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const api = require('./app/api')
const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use('/api/v1', api);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


module.exports = app;