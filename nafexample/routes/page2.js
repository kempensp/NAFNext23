var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page2', { title: 'Page 2' });
});

module.exports = router;
