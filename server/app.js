const express = require('express');

const path = require('path');
const cors = require('cors');

const app = express();

const routes = require('./routes');

app.use(cors());

app.use('/', routes);

app.listen(4000, () => {
    console.log('Listening on port 4000!')
});