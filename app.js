var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Generate a potato image
app.get('/potato', function (req, res) {
  res.send('<img src="http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/9/24/1411574454561/03085543-87de-47ab-a4eb-58e7e39d022e-620x372.jpeg">');
});

//Generating 404 for any other routes
app.get('*', function(req, res, next){
  res.status(404).send("Sorry can't find that"); //http://expressjs.com/starter/faq.html
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
