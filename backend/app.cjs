const express = require('express');
const authRouter = require('./src/routes/auth.routes.cjs');

const app = express();
app.use(express.json());
app.use('/auth', authRouter);

module.exports = app;