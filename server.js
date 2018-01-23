const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');
const es             = require('./config/es');


const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

//MongoClient.connect(db.url, function(err, client) {
  //var myDB = client.db('mirko_test1')
  //if (err) return console.log(err)
  require('./app/routes')(app, {},es);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
//});
