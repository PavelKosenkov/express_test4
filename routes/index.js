var express = require('express');
var azure = require('azure-storage');

var router = express.Router();
var queueSvc = azure.createQueueService(
  'functtionapp1856d',
  'C2BSI+uQH6IUJsWIN7f/dWrHch25V8NCwgHMfkJ1t9nzX053ZX+Ra2+DmxZPwqlkpDJzWmLeclvmXyt5mQ3taw==',
  'https://functtionapp1856d.queue.core.windows.net/'
);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 'title': 'Express1', 'input1': 'null' });
});

router.post('/', function (req, res) {
  queueSvc.createMessage('taskqueue1', req.body.input1.toString(), function(error) {
    if (!error) {
      res.end(error);
    }
  });
  res.render('index', { 'title': 'Express1', 'input1': payload });  
});

module.exports = router;
