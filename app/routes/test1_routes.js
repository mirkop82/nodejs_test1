var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db, es) {

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }
        });
  });

  app.post('/notes', (req, res) => {
    const collection = db.collection('notes')
    const note = { text: req.body.body, title: req.body.title };
    collection.insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.get('/es/:word', (req,res) => {
      const myword = req.params.word;
      es.search({
        index: 'test1',
        body: {
          _source: ["Reviews.Title","Reviews.Content"],
          query: {
            match: { "Reviews.Title": myword }
          },
        }
      },function (error, response,status) {
        if (error){
          console.log("search error: "+error)
        }
        else {
          console.log("--- Response ---");
          console.log(response);
          console.log("--- Hits ---");
          //res.setHeader('Content-Type', 'application/json');
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.write('{"response":[')
          response.hits.hits.forEach(function(hit){
            res.write(JSON.stringify(hit));
            res.write(',')
          })
          res.end('{}]}')
        }
      });
  });

};
