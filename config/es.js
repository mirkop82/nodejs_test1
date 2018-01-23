var elasticsearch=require('elasticsearch');

var esClient = new elasticsearch.Client( {
  hosts: [
    'https://localhost:9200/'
    //,'https://vpc-instachef-v1-oi35unrqunqo6647fvqa6mdaji.eu-west-1.es.amazonaws.com'
  ]
});

module.exports = esClient;
