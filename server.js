let cors = require('cors');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 8080;
let hotelesRouter = require('./app/routes/hotelRouter');
let queryParser = require('express-query-int');

app.use(cors());
app.use(bodyParser.json());
app.use(queryParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));
app.use('/hoteles', hotelesRouter);

app.listen(port);
console.log("Levantado en el puerto " + port);

module.exports = app; // for testing
