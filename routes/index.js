var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 'title': 'Express1', 'ttt': 'qwe' });
});

router.post('/', function (req, res) {
  res.end(req.body.input1);
});

module.exports = router;
