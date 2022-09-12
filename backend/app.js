const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');


const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.use('/api', routes);

app.listen(8000);
console.log('Server started on port 8000');