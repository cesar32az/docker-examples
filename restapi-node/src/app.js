const express = require('express');
const app =express()
const morgan = require('morgan');

app.use(morgan("dev"))

app.use(require("./routes"))

module.exports = app