var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 'title': 'Express1', 'input1': 'null' });
});

router.post('/', function (req, res) {
  res.render('index', { 'title': 'Express1', 'input1': req.body.input1 });
});

module.exports = router;
