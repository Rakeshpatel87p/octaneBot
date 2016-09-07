var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(jsonParser);

app.use(express.static('public'));
// var watson = require('watson-developer-cloud')({
//     username: '8c382bce-d147-4ad6-b9d8-3468b2a48148',
//     password: '7NgpBCebnOGs',
//     version: 'v1'
// });

var watston = require('watson-developer-cloud');
var fs = require('fs');

var natural_language_classifier = watson.natural_language_classifier({
    url: 'https://gateway.watsonplatform.net/natural-language-classifier/api',
    username: '8c382bce-d147-4ad6-b9d8-3468b2a48148',
    password: '7NgpBCebnOGs',
    version: 'v1'
});

// For creating new classifier
// var params = {
//     language: 'en',
//     name: 'My Classifier',
//     training_data: fs.createReadStream('./coffee_data_train.csv')
// };

// natural_language_classifier.create(params, function(err, response) {
//     if (err)
//         console.log(err);
//     else
//         console.log(JSON.stringify(response, null, 2));
// });

natural_language_classifier.classify({
  text: 'How hot will it be today?',
  classifier_id: '10D41B-nlc-1' },
  function(err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});

// "classifier_id" : "be05f9x94-nlc-3107"
app.listen(process.env.PORT || 8080);
exports.app = app;